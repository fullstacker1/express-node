import express from 'express'
import path from 'path'


interface Options {
    port: number,
    public_path?: string
}

export class Server {
    private app = express()
    private readonly port: number
    private readonly publicPath: string

    constructor(options: Options) {
        const { port, public_path = 'public' } = options
        this.port = port
        this.publicPath = public_path

    }
    async start() {

        //middlewares

        //public folders
        this.app.use(express.static(this.publicPath))

        //routes
        this.app.get('/api/todos', (req,res) => {

            res.json([
                {id:1,text:'buy by milk', createAt: new Date()},
                 {id:2,text:'buy by jilk', createAt: new Date()},
                  {id:3,text:'buy by filk', createAt: new Date()}
            ])

        })
        

        this.app.get('*', (req, res) => {
            const indexPath = path.join( __dirname + `../../../${this.publicPath}/index.html`)
            res.sendFile(indexPath)
        })
        this.app.listen(this.port, () => {
            console.log(`server run on port ${this.port}`);
        })
    }

}