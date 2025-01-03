import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { isValidObjectId, Model } from 'mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PokemonService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly PokemonModel: Model<Pokemon>
  ) { }


  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLowerCase();
    try {
      const pokemon = await this.PokemonModel.create(createPokemonDto);
      return pokemon;
    } catch (e) {
      this.handleError(e);
    }
  }

  async findAll() {

  }

  async findOne(term: string) {
    // no
    let pokemon: Pokemon;
    if (!isNaN(+term))
      pokemon = await this.PokemonModel.findOne({ no: term });

    //mongoId
    if (!pokemon && isValidObjectId(term))
      pokemon = await this.PokemonModel.findById(term);

    //name
    if (!pokemon)
      pokemon = await this.PokemonModel.findOne({ name: term.toLowerCase() });

    // no match upto here throw exception
    if (!pokemon)
      throw new NotFoundException(`Pokemon with term ${term} not found`);
    return pokemon;
  }

  async update(term: string, updatePokemonDto: UpdatePokemonDto) {

    const pokemon = await this.findOne(term);
    if (updatePokemonDto.name)
      updatePokemonDto.name = updatePokemonDto.name.toLowerCase();
    try {
      await pokemon.updateOne(updatePokemonDto);
    } catch (e) {
      this.handleError(e);
    }
    return { ...pokemon.toJSON(), ...updatePokemonDto };
  }


  async remove(id: string) {
    const { deletedCount } = await this.PokemonModel.deleteOne({ _id: id });
    if(deletedCount === 0)
      throw new BadRequestException(`Pokemon with id ${id} not found`);
    return;
  }

  private handleError(e: any) {
    if (e.code === 11000) {
      throw new BadRequestException(`Pokemon already exists in DB ${JSON.stringify(e.keyValue)}`);
    }
    console.error(e);
    throw new InternalServerErrorException(`Can not create pokemon ${e.message}`);
  }
}
