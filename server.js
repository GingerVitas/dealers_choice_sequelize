const { sequelize, syncAndSeed, Models: {Team, Player, Position} } = require('./db.js');
const express = require('express');
const app = express();
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));

app.get('/', async(req, res, next) => {
    try{
        res.redirect('/teams')
    }
    catch(ex) {
        next(ex)
    }
})

app.get('/teams', async(req, res, next) =>{
    try{
        const teams = await Team.findAll();
        const html = teams.map(team => {
            return `
            <li>
                <a href='/rosters/${team.id}'>${team.name}
            </li>
            `
        }).join('');
        res.send(`
        <h1>NFC North Teams</h1>
        <div>
            <ul>
            ${html}
            </ul>
        </div>
        `)
    }
    catch(ex){
        next(ex)
    }
});

app.post('/rosters/:id', async(req, res, next)=> {
    try{
        playerName = req.body.playerId;
        position = req.body.positionId;
        await Player.create({name: playerName, positionId: position, teamId: req.params.id})
        res.redirect('back')
    }
    catch(ex){
        next(ex)
    }
})

app.get('/rosters/:id', async(req, res, next)=> {
    try{
        const roster = await Player.findAll({
            order: ['positionId'],
            where: {teamId: req.params.id},
            include: [Position],
        });
        const team = await Team.findAll({
            where: {id: req.params.id}
        });
        const position = await Position.findAll();
        const html = roster.map(player => {
            return `
            <div>
                <li>
                ${player.name} - ${player.position.name}
                </li>
            </div>
            `
        }).join('');
        res.send(`
        <h1>${team[0].name} Roster</h1>
        <div>
        <a href='/teams'>Back</a>
        </div>
        <div>
            <h3>Add a player</h3>
            <form method='POST'>
                <input name='playerId' placeholder='Player Name' />
                <select name='positionId'>
                    ${position.map( position => {
                        return `
                        <option value=${position.id}> ${position.name} </option>
                        `
                    }).join('')}
                </select>
                <button>Add Player</button>
            </form>
        <div>
            <ul>
            ${html}
            </ul>
        </div>
        `);
    }
    catch(ex){
        next(ex)
    }
}
)





const startup = async(req, res, next) => {
    try{
        sequelize.authenticate();
        await syncAndSeed();
        const port = process.env.PORT || 3000;
        app.listen(port, ()=> console.log(`listening on port ${port}`))
    }
    catch(ex) {
        next(ex)
    }
};

startup();