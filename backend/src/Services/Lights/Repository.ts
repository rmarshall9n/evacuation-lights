import type { Light, LightInput } from './Types'
import config from '../../../knexfile'
import createKnex from 'knex'

const knex = createKnex(config['development'])

export async function getLights(): Promise<Light[]> {
    const lights = await knex<Light>('lights')

    return lights
}

export async function getLight(id: number): Promise<Light | undefined> {
    const light = await knex('lights').where('id', id).first()

    return light
}

export async function storeLight(data: LightInput): Promise<number> {
    const ids = await knex('lights').insert(data)

    return ids[0]
}

export async function updateLight(id: number, data: LightInput) {
    await knex('lights')
        .where({ id })
        .update(data)
}
