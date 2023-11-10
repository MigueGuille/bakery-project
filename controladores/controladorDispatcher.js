export class ControladorDispatcher {
    static servirHome(req, res){
        //return res.sendFile('home.html', { root: './views' })
        return res.json({message: 'bienvenido al home'})
    }
}