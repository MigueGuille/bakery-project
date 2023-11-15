export class ControladorDispatcher {
    static servirHome(req, res){
        return res.json({message: 'bienvenido al home'})
    }
}