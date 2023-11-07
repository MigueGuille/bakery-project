export class ControladorDispatcher {
    static servirHome(req, res){
        //return res.sendFile('home.html', { root: './views' })
        return res.send('bienvenido al home')
    }
}