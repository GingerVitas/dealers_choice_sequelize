//datalayer setup
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/nfc_north_roster_db')
const STRING = Sequelize.STRING

const Team = sequelize.define('team', {
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
});

const Player = sequelize.define('player', {
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
    },
});

const Position = sequelize.define('position', {
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
    },
});

Team.hasMany(Player);
Player.belongsTo(Team);
Player.belongsTo(Position);
Position.hasMany(Player);

const syncAndSeed = async() => {
    try{
        await sequelize.sync({force: true});
        const packers = await Team.create({name:'Green Bay Packers'});
        const bears = await Team.create({name: 'Chicago Bears'});
        const vikings = await Team.create({name: 'Minnesota Vikings'});
        const lions = await Team.create({name: 'Detroit Lions'});
        const qb = await Position.create({name: 'Quarterback'});
        const rb = await Position.create({name: 'Running Back'});
        const wr = await Position.create({name: 'Wide Receiver'});
        const te = await Position.create({name: 'Tight End'});
        const ol = await Position.create({name: 'Offensive Lineman'});
        const dl = await Position.create({name: 'Defensive Lineman'});
        const lb = await Position.create({name: 'Linebacker'});
        const db = await Position.create({name: 'Defensive Back'});
        const k = await Position.create({name: 'Kicker'});
        const p = await Position.create({name: 'Punter'});
        await Player.create({name: 'Kurt Benkert', positionId: qb.id, teamId: packers.id});
        await Player.create({name: 'Jordan Love', positionId: qb.id, teamId: packers.id});
        await Player.create({name: 'Aaron Rodgers', positionId: qb.id, teamId: packers.id});
        await Player.create({name: 'A.J. Dillon', positionId: rb.id, teamId: packers.id});
        await Player.create({name: 'Kylin Hill', positionId: rb.id, teamId: packers.id});
        await Player.create({name: 'Aaron Jones', positionId: rb.id, teamId: packers.id});
        await Player.create({name: 'Patrick Taylor', positionId: rb.id, teamId: packers.id});
        await Player.create({name: 'Davante Adams', positionId: wr.id, teamId: packers.id});
        await Player.create({name: 'Randall Cobb', positionId: wr.id, teamId: packers.id});
        await Player.create({name: 'Allen Lazard', positionId: wr.id, teamId: packers.id});
        await Player.create({name: 'Josh Malone', positionId: wr.id, teamId: packers.id});
        await Player.create({name: 'Amari Rodgers', positionId: wr.id, teamId: packers.id});
        await Player.create({name: 'Equanimeous St. Brown', positionId: wr.id, teamId: packers.id});
        await Player.create({name: 'Malik Taylor', positionId: wr.id, teamId: packers.id});
        await Player.create({name: 'Marquez Valdez-Scantling', positionId: wr.id, teamId: packers.id});
        await Player.create({name: 'Juwann Winfree', positionId: wr.id, teamId: packers.id});
        await Player.create({name: 'Dominique Dafney', positionId: te.id, teamId: packers.id});
        await Player.create({name: 'Tyler Davis', positionId: te.id, teamId: packers.id});
        await Player.create({name: 'Josiah Deguara', positionId: te.id, teamId: packers.id});
        await Player.create({name: 'Marcedes Lewis', positionId: te.id, teamId: packers.id});
        await Player.create({name: 'Alize Mack', positionId: te.id, teamId: packers.id});
        await Player.create({name: 'Robert Tonyan', positionId: te.id, teamId: packers.id});
        await Player.create({name: 'David Bakhtiari', positionId: ol.id, teamId: packers.id});
        await Player.create({name: 'Elgton Jenkins', positionId: ol.id, teamId: packers.id});
        await Player.create({name: 'Josh Myers', positionId: ol.id, teamId: packers.id});
        await Player.create({name: 'Lucas Patrick', positionId: ol.id, teamId: packers.id});
        await Player.create({name: 'Billy Turner', positionId: ol.id, teamId: packers.id});
        await Player.create({name: 'Jon Runyan', positionId: ol.id, teamId: packers.id});
        await Player.create({name: 'Royce Newman', positionId: ol.id, teamId: packers.id});
        await Player.create({name: 'Dennis Kelly', positionId: ol.id, teamId: packers.id});
        await Player.create({name: 'Yosh Nijman', positionId: ol.id, teamId: packers.id});
        await Player.create({name: 'Cole Van Lanen', positionId: ol.id, teamId: packers.id});
        await Player.create({name: 'Dean Lowry', positionId: dl.id, teamId: packers.id});
        await Player.create({name: 'Kenny Clark', positionId: dl.id, teamId: packers.id});
        await Player.create({name: 'Tyler Lancaster', positionId: dl.id, teamId: packers.id});
        await Player.create({name: 'T.J. Slaton', positionId: dl.id, teamId: packers.id});
        await Player.create({name: 'Preston Smith', positionId: lb.id, teamId: packers.id});
        await Player.create({name: 'De\'Vondre Campbell', positionId: lb.id, teamId: packers.id});
        await Player.create({name: 'Krys Barnes', positionId: lb.id, teamId: packers.id});
        await Player.create({name: 'Rashan Gary', positionId: lb.id, teamId: packers.id});
        await Player.create({name: 'Whitney Mercilus', positionId: lb.id, teamId: packers.id});
        await Player.create({name: 'Za\'Darius Smith', positionId: lb.id, teamId: packers.id});
        await Player.create({name: 'Eric Stokes', positionId: db.id, teamId: packers.id});
        await Player.create({name: 'Adriam Amos', positionId: db.id, teamId: packers.id});
        await Player.create({name: 'Darnell Savage', positionId: db.id, teamId: packers.id});
        await Player.create({name: 'Jaire Alexander', positionId: db.id, teamId: packers.id});
        await Player.create({name: 'Rasul Douglas', positionId: db.id, teamId: packers.id});
        await Player.create({name: 'Kevin King', positionId: db.id, teamId: packers.id});
        await Player.create({name: 'Chandon Sullivan', positionId: db.id, teamId: packers.id});
        await Player.create({name: 'Mason Crosby', positionId: k.id, teamId: packers.id});
        await Player.create({name: 'Corey Bojorquez', positionId: p.id, teamId: packers.id});
        await Player.create({name: 'Justin Fields', positionId: qb.id, teamId: bears.id});
        await Player.create({name: 'Andy Dalton', positionId: qb.id, teamId: bears.id});
        await Player.create({name: 'Nick Foles', positionId: qb.id, teamId: bears.id});
        await Player.create({name: 'David Montgomery', positionId: rb.id, teamId: bears.id});
        await Player.create({name: 'Khalil Herbert', positionId: wr.id, teamId: bears.id});
        await Player.create({name: 'Damien Williams', positionId: wr.id, teamId: bears.id});
        await Player.create({name: 'Darnell Mooney', positionId: wr.id, teamId: bears.id});
        await Player.create({name: 'Allen Robinson II', positionId: wr.id, teamId: bears.id});
        await Player.create({name: 'Damiere Byrd', positionId: wr.id, teamId: bears.id});
        await Player.create({name: 'Marquise Goodwin', positionId: wr.id, teamId: bears.id});
        await Player.create({name: 'Jakeem Grant Sr.', positionId: wr.id, teamId: bears.id});
        await Player.create({name: 'Dazz Newsome', positionId: wr.id, teamId: bears.id});
        await Player.create({name: 'Cole Kmet', positionId: te.id, teamId: bears.id});
        await Player.create({name: 'Jimmy Graham', positionId: te.id, teamId: bears.id});
        await Player.create({name: 'Jesse James', positionId: te.id, teamId: bears.id});
        await Player.create({name: 'Jason Peters', positionId: ol.id, teamId: bears.id});
        await Player.create({name: 'Cody Whitehair', positionId: ol.id, teamId: bears.id});
        await Player.create({name: 'Sam Mustipher', positionId: ol.id, teamId: bears.id});
        await Player.create({name: 'James Daniels', positionId: ol.id, teamId: bears.id});
        await Player.create({name: 'Larry Borom', positionId: ol.id, teamId: bears.id});
        await Player.create({name: 'Teven Jenkins', positionId: ol.id, teamId: bears.id});
        await Player.create({name: 'Alex Bars', positionId: ol.id, teamId: bears.id});
        await Player.create({name: 'Germain Ifedi', positionId: ol.id, teamId: bears.id});
        await Player.create({name: 'Elijah Wilkinson', positionId: ol.id, teamId: bears.id});
        await Player.create({name: 'Dieter Eiselen', positionId: ol.id, teamId: bears.id});
        await Player.create({name: 'Khalil Mack', positionId: dl.id, teamId: bears.id});
        await Player.create({name: 'Eddie Goldman', positionId: dl.id, teamId: bears.id});
        await Player.create({name: 'Akiem Hicks', positionId: dl.id, teamId: bears.id});
        await Player.create({name: 'Bilal Nichols', positionId: dl.id, teamId: bears.id});
        await Player.create({name: 'Angelo Blackson', positionId: dl.id, teamId: bears.id});
        await Player.create({name: 'Jeremiah Attaochu', positionId: dl.id, teamId: bears.id});
        await Player.create({name: 'Robert Quinn', positionId: dl.id, teamId: bears.id});
        await Player.create({name: 'Trevis Gipson', positionId: dl.id, teamId: bears.id});
        await Player.create({name: 'Danny Trevathan', positionId: lb.id, teamId: bears.id});
        await Player.create({name: 'Roquan Smith', positionId: lb.id, teamId: bears.id});
        await Player.create({name: 'Christian Jones', positionId: lb.id, teamId: bears.id});
        await Player.create({name: 'Jaylon Johnson', positionId: db.id, teamId: bears.id});
        await Player.create({name: 'Alec Ogletree', positionId: lb.id, teamId: bears.id});
        await Player.create({name: 'Caleb Johnson', positionId: lb.id, teamId: bears.id});
        await Player.create({name: 'Bruce Irvin', positionId: lb.id, teamId: bears.id});
        await Player.create({name: 'Xavier Crawford', positionId: db.id, teamId: bears.id});
        await Player.create({name: 'Tashaun Gipson Sr.', positionId: db.id, teamId: bears.id});
        await Player.create({name: 'Eddie Jackson', positionId: db.id, teamId: bears.id});
        await Player.create({name: 'Duke Shelley', positionId: db.id, teamId: bears.id});
        await Player.create({name: 'DeAndre Houston-Carson', positionId: db.id, teamId: bears.id});
        await Player.create({name: 'Deon Bush', positionId: db.id, teamId: bears.id});
        await Player.create({name: 'Artie Burns', positionId: db.id, teamId: bears.id});
        await Player.create({name: 'Thomas Graham Jr.', positionId: db.id, teamId: bears.id});
        await Player.create({name: 'Teez Tabor', positionId: db.id, teamId: bears.id});
        await Player.create({name: 'Marqui Christian', positionId: db.id, teamId: bears.id});
        await Player.create({name: 'Kindle Vildor', positionId: db.id, teamId: bears.id});
        await Player.create({name: 'Cairo Santos', positionId: k.id, teamId: bears.id});
        await Player.create({name: 'Pat O\'Donnell', positionId: p.id, teamId: bears.id});
        await Player.create({name: 'Kirk Cousins', positionId: qb.id, teamId: vikings.id});
        await Player.create({name: 'Sean Mannion', positionId: qb.id, teamId: vikings.id});
        await Player.create({name: 'Kellen Mond', positionId: qb.id, teamId: vikings.id});
        await Player.create({name: 'Dalvin Cook', positionId: rb.id, teamId: vikings.id});
        await Player.create({name: 'Alexander Mattison', positionId: rb.id, teamId: vikings.id});
        await Player.create({name: 'Kene Nwangwu', positionId: rb.id, teamId: vikings.id});
        await Player.create({name: 'Wayne Gallman', positionId: rb.id, teamId: vikings.id});
        await Player.create({name: 'Justin Jefferson', positionId: wr.id, teamId: vikings.id});
        await Player.create({name: 'Adam Thielen', positionId: wr.id, teamId: vikings.id});
        await Player.create({name: 'K.J. Osborn', positionId: wr.id, teamId: vikings.id});
        await Player.create({name: 'Dede Westbrook', positionId: wr.id, teamId: vikings.id});
        await Player.create({name: 'Ihmir Smith-Marsette', positionId: wr.id, teamId: vikings.id});
        await Player.create({name: 'Chad Beebe', positionId: wr.id, teamId: vikings.id});
        await Player.create({name: 'Bisi Johnson', positionId: wr.id, teamId: vikings.id});
        await Player.create({name: 'Dan Chisena', positionId: wr.id, teamId: vikings.id});
        await Player.create({name: 'Irv Smith Jr.', positionId: te.id, teamId: vikings.id});
        await Player.create({name: 'Tyler Conklin', positionId: te.id, teamId: vikings.id});
        await Player.create({name: 'Chris Herndon', positionId: te.id, teamId: vikings.id});
        await Player.create({name: 'Luke Stocker', positionId: te.id, teamId: vikings.id});
        await Player.create({name: 'C.J. Ham', positionId: rb.id, teamId: vikings.id});
        await Player.create({name: 'Christian Darrisaw', positionId: ol.id, teamId: vikings.id});
        await Player.create({name: 'Ezra Cleveland', positionId: ol.id, teamId: vikings.id});
        await Player.create({name: 'Garrett Bradbury', positionId: ol.id, teamId: vikings.id});
        await Player.create({name: 'Olisaemeka Udoh', positionId: ol.id, teamId: vikings.id});
        await Player.create({name: 'Brian O\'Neill', positionId: ol.id, teamId: vikings.id});
        await Player.create({name: 'Dakota Dozier', positionId: ol.id, teamId: vikings.id});
        await Player.create({name: 'Mason Cole', positionId: ol.id, teamId: vikings.id});
        await Player.create({name: 'Blake Brandel', positionId: ol.id, teamId: vikings.id});
        await Player.create({name: 'Rashod Hill', positionId: ol.id, teamId: vikings.id});
        await Player.create({name: 'Kyle Hinton', positionId: ol.id, teamId: vikings.id});
        await Player.create({name: 'Timon Parris', positionId: ol.id, teamId: vikings.id});
        await Player.create({name: 'Danielle Hunter', positionId: dl.id, teamId: vikings.id});
        await Player.create({name: 'Michael Pierce', positionId: dl.id, teamId: vikings.id});
        await Player.create({name: 'Dalvin Domlinson', positionId: dl.id, teamId: vikings.id});
        await Player.create({name: 'D.J. Wonnum', positionId: dl.id, teamId: vikings.id});
        await Player.create({name: 'Everson Griffen', positionId: dl.id, teamId: vikings.id});
        await Player.create({name: 'Armon Watts', positionId: dl.id, teamId: vikings.id});
        await Player.create({name: 'Sheldon Richardson', positionId: dl.id, teamId: vikings.id});
        await Player.create({name: 'Nick Vigil', positionId: lb.id, teamId: vikings.id});
        await Player.create({name: 'Eric Kendricks', positionId: lb.id, teamId: vikings.id});
        await Player.create({name: 'Anthony Barr', positionId: lb.id, teamId: vikings.id});
        await Player.create({name: 'Chazz Surratt', positionId: lb.id, teamId: vikings.id});
        await Player.create({name: 'Troy Dye', positionId: lb.id, teamId: vikings.id});
        await Player.create({name: 'Blake Lynch', positionId: lb.id, teamId: vikings.id});
        await Player.create({name: 'Patrick Peterson', positionId: db.id, teamId: vikings.id});
        await Player.create({name: 'Harrison Smith', positionId: db.id, teamId: vikings.id});
        await Player.create({name: 'Xavier Woods', positionId: db.id, teamId: vikings.id});
        await Player.create({name: 'Cameron Dantzler', positionId: db.id, teamId: vikings.id});
        await Player.create({name: 'Harrison Hand', positionId: db.id, teamId: vikings.id});
        await Player.create({name: 'Camryn Bynum', positionId: db.id, teamId: vikings.id});
        await Player.create({name: 'Josh Metellus', positionId: db.id, teamId: vikings.id});
        await Player.create({name: 'Greg Joseph', positionId: k.id, teamId: vikings.id});
        await Player.create({name: 'Jordan Berry', positionId: p.id, teamId: vikings.id});
        await Player.create({name: 'Jared Goff', positionId: qb.id, teamId: lions.id});
        await Player.create({name: 'Tim Boyle', positionId: qb.id, teamId: lions.id});
        await Player.create({name: 'David Blough', positionId: qb.id, teamId: lions.id});
        await Player.create({name: 'D\'Andre Smith', positionId: rb.id, teamId: lions.id});
        await Player.create({name: 'Jamaal Williams', positionId: rb.id, teamId: lions.id});
        await Player.create({name: 'Craig Reynolds', positionId: rb.id, teamId: lions.id});
        await Player.create({name: 'Godwin Igwebuike', positionId: rb.id, teamId: lions.id});
        await Player.create({name: 'Amon-Ra St. Brown', positionId: wr.id, teamId: lions.id});
        await Player.create({name: 'Quintez Cephus', positionId: wr.id, teamId: lions.id});
        await Player.create({name: 'Josh Reynolds', positionId: wr.id, teamId: lions.id});
        await Player.create({name: 'Kalif Raymond', positionId: wr.id, teamId: lions.id});
        await Player.create({name: 'KhaDarel Hodge', positionId: wr.id, teamId: lions.id});
        await Player.create({name: 'Tom Kennedy', positionId: wr.id, teamId: lions.id});
        await Player.create({name: 'Trinity Benson', positionId: wr.id, teamId: lions.id});
        await Player.create({name: 'Javon McKinley', positionId: wr.id, teamId: lions.id});
        await Player.create({name: 'T.J. Hockenson', positionId: te.id, teamId: lions.id});
        await Player.create({name: 'Brock Wright', positionId: te.id, teamId: lions.id});
        await Player.create({name: 'Hunter Bryant', positionId: te.id, teamId: lions.id});
        await Player.create({name: 'Jason Cabinda', positionId: rb.id, teamId: lions.id});
        await Player.create({name: 'Taylor Decker', positionId: ol.id, teamId: lions.id});
        await Player.create({name: 'Jonah Jackson', positionId: ol.id, teamId: lions.id});
        await Player.create({name: 'Frank Ragnow', positionId: ol.id, teamId: lions.id});
        await Player.create({name: 'Halapoulivaati Vaitai', positionId: ol.id, teamId: lions.id});
        await Player.create({name: 'Penei Sewell', positionId: ol.id, teamId: lions.id});
        await Player.create({name: 'Tommy Kraemer', positionId: ol.id, teamId: lions.id});
        await Player.create({name: 'Evan Brown', positionId: ol.id, teamId: lions.id});
        await Player.create({name: 'Tyrell Crosby', positionId: ol.id, teamId: lions.id});
        await Player.create({name: 'Logan Stenberg', positionId: ol.id, teamId: lions.id});
        await Player.create({name: 'Michael Brockers', positionId: dl.id, teamId: lions.id});
        await Player.create({name: 'Alim McNeill', positionId: dl.id, teamId: lions.id});
        await Player.create({name: 'Nick Williams', positionId: dl.id, teamId: lions.id});
        await Player.create({name: 'Levi Onwuzurike', positionId: dl.id, teamId: lions.id});
        await Player.create({name: 'John Penisini', positionId: dl.id, teamId: lions.id});
        await Player.create({name: 'Joel Heath', positionId: dl.id, teamId: lions.id});
        await Player.create({name: 'Trey Flowers', positionId: lb.id, teamId: lions.id});
        await Player.create({name: 'Alex Anzalone', positionId: lb.id, teamId: lions.id});
        await Player.create({name: 'Jalen Reeves-Maybin', positionId: lb.id, teamId: lions.id});
        await Player.create({name: 'Romeo Okwara', positionId: lb.id, teamId: lions.id});
        await Player.create({name: 'Julian Okwara', positionId: lb.id, teamId: lions.id});
        await Player.create({name: 'Derrick Barnes', positionId: lb.id, teamId: lions.id});
        await Player.create({name: 'Shaun Dion Hamilton', positionId: lb.id, teamId: lions.id});
        await Player.create({name: 'Charles Harris', positionId: lb.id, teamId: lions.id});
        await Player.create({name: 'Amani Oruwariye', positionId: db.id, teamId: lions.id});
        await Player.create({name: 'Will Harris', positionId: db.id, teamId: lions.id});
        await Player.create({name: 'Tracy Walker III', positionId: db.id, teamId: lions.id});
        await Player.create({name: 'Jeff Okudah', positionId: db.id, teamId: lions.id});
        await Player.create({name: 'Jerry Jacobs', positionId: db.id, teamId: lions.id});
        await Player.create({name: 'Dean Marlowe', positionId: db.id, teamId: lions.id});
        await Player.create({name: 'C.J. Moore', positionId: db.id, teamId: lions.id});
        await Player.create({name: 'AJ Parker', positionId: db.id, teamId: lions.id});
        await Player.create({name: 'Jalen Elliott', positionId: db.id, teamId: lions.id});
        await Player.create({name: 'Austin Seibert', positionId: k.id, teamId: lions.id});
        await Player.create({name: 'Jack Fox', positionId: p.id, teamId: lions.id});
    }
    catch(ex) {
        console.log(ex)
    }
};

//server setup

const express = require('express');
const app = express();
const methodOverride = require('method-override');

app.use(methodOverride('_method'));

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

app.get('/rosters/:id', async(req, res, next)=> {
    try{
        const roster = await Player.findAll({
            where: {teamId: req.params.id},
            include: [Position]
        });
        const team = await Team.findAll({
            where: {id: req.params.id}
        });
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
        sequelize.sync();
        await syncAndSeed();
        const port = process.env.PORT || 3000;
        app.listen(port, ()=> console.log(`listening on port ${port}`))
    }
    catch(ex) {
        next(ex)
    }
};

startup();