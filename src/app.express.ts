import { Server } from './presentation/server.js'
import { envs } from './config/envs.js'

(() => {
    main()
})()

function main() {

    const server = new Server(
        {
            port:envs.PORT,
            public_path:envs.PUBLIC_PATH
        }
    )
    server.start()

} 