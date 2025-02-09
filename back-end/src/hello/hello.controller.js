export default class HelloController {

    static async hello(req, res) {
        res.status(200).json({ 
            message: "OK",
            data: "Hello World" 
        });
    }

}