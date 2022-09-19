import { Router, Request, Response } from "express"

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.json([{id: 1},{id: 2}])
})

router.get('/:id(\d+)', (req: Request, res: Response) => {
    res.json({id: 1})
})

router.post('/', (req: Request, res: Response) => {
    res.json({id: 1})
})

router.post('/:id(\d+)', (req: Request, res: Response) => {
    res.json({id: 1})
})

router.post('/:id(\d+)/retire', (req: Request, res: Response) => {
    res.json({id: 1})
})
        
export default router
