import { Router, Request, Response } from "express"
import { getLights, getLight, storeLight, updateLight, retireLight } from "./Repository"
import { validateCreateLight } from "./Validators"

const router = Router()

router.get('/', async (req: Request, res: Response) => {
    const lights = await getLights()

    res.json(lights)
})

router.get('/:id(\\d+)', async (req: Request, res: Response) => {
    const light = await getLight(Number(req.params.id))

    if (light === undefined) {
        res.sendStatus(404)
    }

    res.json(light)
})

router.post('/', async (req: Request, res: Response) => {
    const errors = validateCreateLight(req.body)
    if (errors.length > 0) {
        res.status(422).json({ errors })
        return
    }

    const id = await storeLight({
        name: req.body.name,
        description: req.body.description,
    })

    const light = await getLight(id)

    if (light === undefined) {
        res.sendStatus(404)
        return
    }

    res.json(light)
})

router.post('/:id(\\d+)', async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    await updateLight(id, {
        name: req.body.name,
        description: req.body.description,
    })

    const light = await getLight(id)

    if (light === undefined) {
        res.sendStatus(404)
    }

    res.json(light)
})

router.post('/:id(\\d+)/retire', async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    await retireLight(id)

    const light = await getLight(id)

    if (light === undefined) {
        res.sendStatus(404)
    }

    res.json(light)
})

export default router
