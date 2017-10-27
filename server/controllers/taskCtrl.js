module.exports = {
    getTasks: (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.user;

        db.getTasks(user_id).then(result => {
            res.send(result);
        });
    },
    addTask: (req, res) => {
        console.log(req.user)
        const db = req.app.get('db');
        const {user_id} = req.user;
        const{title} = req.body;

        db.addTask([user_id, title]).then(_=>{
            db.getTasks(user_id).then(result => {
                res.send(result);
            });
        })
    },
    completeTask: (req, res) =>{
        const db = req.app.get('db');
        const {user_id} = req.user;
        const{id} = req.params;

        db.completeTask(id).then(_=>{
            db.getTasks(user_id).then(result => {
                res.send(result);
            });
        })
    },
    deleteTask: (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.user;
        const{id} = req.params;

        db.deleteTask(id).then(_=>{
            db.getTasks(user_id).then(result => {
                res.send(result);
            });
        })
    },
    editTask: (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.user;
        const{id} = req.params;
        const{title, description} = req.body;

        db.editTask([title, description, id]).then(_=>{
            db.getTasks(user_id).then(result => {
                res.send(result);
            });
        })
    }
};