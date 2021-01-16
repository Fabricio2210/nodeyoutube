let arrayDirMock = [
  "#3 Schemas & Resolvers _ Build a Complete App with GraphQL, Node.js, MongoDB and React.js.info.json",
];
let bufferMock = `{"id": "LXTyzk2uud0", "uploader": "Academind", "uploader_id": "UCSJbGtTlrDami-tDGPUV9-w", "uploader_url": "http://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w", "channel_id": "UCSJbGtTlrDami-tDGPUV9-w", "channel_url": "http://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w", "upload_date": "20181207", "license": null, "creator": null, "title": "#3 Schemas & Resolvers | Build a Complete App with GraphQL, Node.js, MongoDB and React.js", "alt_title": null, "thumbnails": [{"url": "https://i.ytimg.com/vi/LXTyzk2uud0/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBysvhCNiY_JaYzLd0mTUDd3ASMmQ", "width": 168, "height": 94, "resolution": "168x94", "id": "0"}]}`;

let parsedMock = JSON.parse(bufferMock);
let {
  id,
  channel_id,
  channel_url,
  title,
  uploader,
  upload_date,
  thumbnail,
} = parsedMock;

let subs = [
  {
    start: '1.7',
    dur: '4.8',
    text: 'hi everyone welcome back to this series'
  },
  {
    start: '4.01',
    dur: '4.65',
    text: 'in the last part of this series we'
  },
  {
    start: '6.5',
    dur: '4.71',
    text: 'created our basic node Express server'
  },
  {
    start: '8.66',
    dur: '4.83',
    text: 'now I want to start implementing the'
  },
  {
    start: '11.21',
    dur: '4.169',
    text: 'graph QL API on that server because'
  },
  {
    start: '13.49',
    dur: '4.38',
    text: 'right now our server is not really doing'
  },
  {
    start: '15.379',
    dur: '3.961',
    text: "a lot so let's dive right into that and"
  },
  {
    start: '17.87',
    dur: '3.9',
    text: "let's make sure that by the end of the"
  },
  {
    start: '19.34',
    dur: '5.87',
    text: 'video we have our first graph QL API'
  },
  {
    start: '21.77',
    dur: '3.44',
    text: 'implementation up and running'
  },
  {
    start: '26.08',
    dur: '4.17',
    text: "so I'm back in my project here with my"
  },
  {
    start: '28.539',
    dur: '5.071',
    text: 'running development server started with'
  },
  {
    start: '30.25',
    dur: '5.879',
    text: 'NPM start and I will quit it now because'
  },
  {
    start: '33.61',
    dur: '6.96',
    text: 'I now want to install extra packages to'
  },
  {
    start: '36.129',
    dur: '5.82',
    text: 'make my graph QL API run because as you'
  },
  {
    start: '40.57',
    dur: '3.629',
    text: 'learned in the first video of this'
  },
  {
    start: '41.949',
    dur: '4.981',
    text: 'serious graph QL is basically a'
  },
  {
    start: '44.199',
    dur: '5.79',
    text: 'specification that defines a query'
  },
  {
    start: '46.93',
    dur: '5.37',
    text: 'language which clients can send in the'
  },
  {
    start: '49.989',
    dur: '4.89',
    text: 'body of a post request to the back-end'
  },
  {
    start: '52.3',
    dur: '4.8',
    text: 'so the job of the backend will be to'
  },
  {
    start: '54.879',
    dur: '4.5',
    text: 'parse these incoming queries to'
  },
  {
    start: '57.1',
    dur: '4.5',
    text: 'understand these commands sent by the'
  },
  {
    start: '59.379',
    dur: '4.981',
    text: 'front-end and deliver the writes data'
  },
  {
    start: '61.6',
    dur: '5.04',
    text: 'back to the front-end or do whatever the'
  },
  {
    start: '64.36',
    dur: '4.92',
    text: 'query instructs us to do there also are'
  },
  {
    start: '66.64',
    dur: '5.7',
    text: 'mutations which want the server to save'
  },
  {
    start: '69.28',
    dur: '5.79',
    text: 'or delete or update something so parsing'
  },
  {
    start: '72.34',
    dur: '5.19',
    text: 'these queries will be important and to'
  },
  {
    start: '75.07',
    dur: '4.95',
    text: 'parse a query we essentially need two'
  },
  {
    start: '77.53',
    dur: '6.119',
    text: 'parts you could say first of all we need'
  },
  {
    start: '80.02',
    dur: '7.29',
    text: 'a package or a tool that is capable of'
  },
  {
    start: '83.649',
    dur: '5.76',
    text: 'understanding graph QL queries now these'
  },
  {
    start: '87.31',
    dur: '3.72',
    text: 'queries are standardized the keywords'
  },
  {
    start: '89.409',
    dur: '4.111',
    text: 'you can use there are standardized'
  },
  {
    start: '91.03',
    dur: '6.179',
    text: 'because there is a specification so such'
  },
  {
    start: '93.52',
    dur: '6.18',
    text: 'parsing packages exist the other part is'
  },
  {
    start: '97.209',
    dur: '6.211',
    text: 'that we need to define the capabilities'
  },
  {
    start: '99.7',
    dur: '7.11',
    text: 'of our API we need to define which kind'
  },
  {
    start: '103.42',
    dur: '6.39',
    text: 'of queries can we handle which kind of'
  },
  {
    start: '106.81',
    dur: '5.88',
    text: 'mutations can we take care of because if'
  },
  {
    start: '109.81',
    dur: '5.52',
    text: 'a front-end application wants to get all'
  },
  {
    start: '112.69',
    dur: '5.31',
    text: 'users this is only possible if we'
  },
  {
    start: '115.33',
    dur: '5.7',
    text: 'defined a so called schema on the back'
  },
  {
    start: '118',
    dur: '6.3',
    text: 'end in our graph QL API that knows what'
  },
  {
    start: '121.03',
    dur: '5.25',
    text: 'to do when such users are requested so'
  },
  {
    start: '124.3',
    dur: '4.59',
    text: "we'll have to take care about both now"
  },
  {
    start: '126.28',
    dur: '4.709',
    text: 'for the parsing and for registering our'
  },
  {
    start: '128.89',
    dur: '4.47',
    text: 'schema and so on and for matching our'
  },
  {
    start: '130.989',
    dur: '4.651',
    text: 'schema to the resolvers which is the'
  },
  {
    start: '133.36',
    dur: '4.53',
    text: 'code that actually takes care about what'
  },
  {
    start: '135.64',
    dur: '5.52',
    text: 'needs to be done for all of that we can'
  },
  {
    start: '137.89',
    dur: '5.819',
    text: 'use packages for writing the schemas and'
  },
  {
    start: '141.16',
    dur: '4.59',
    text: 'defining the schema of our API we are'
  },
  {
    start: '143.709',
    dur: '3.691',
    text: "the only one who can do that so let's"
  },
  {
    start: '145.75',
    dur: '4.68',
    text: 'first of all install the packages we'
  },
  {
    start: '147.4',
    dur: '6.03',
    text: "need I'll do that with npm install' - -"
  },
  {
    start: '150.43',
    dur: '6.51',
    text: 'save and i need two packages here'
  },
  {
    start: '153.43',
    dur: '6.029',
    text: 'the first one is Express graph QL this'
  },
  { start: '156.94', dur: '5.249', text: 'is a graph QL' },
  {
    start: '159.459',
    dur: '5.37',
    text: 'package that can be used as a middleware'
  },
  {
    start: '162.189',
    dur: '5.541',
    text: 'in express note reyes applications and'
  },
  {
    start: '164.829',
    dur: '5.821',
    text: 'that allows us to point at a schema at'
  },
  {
    start: '167.73',
    dur: '5.739',
    text: 'resolvers and automatically connect all'
  },
  {
    start: '170.65',
    dur: '5.669',
    text: 'of that for us and route requests to a'
  },
  {
    start: '173.469',
    dur: '4.86',
    text: 'parser and then handle them according to'
  },
  {
    start: '176.319',
    dur: '4.681',
    text: 'our schema and forward them to the right'
  },
  {
    start: '178.329',
    dur: '4.14',
    text: 'resolvers so a lot of magic work that'
  },
  {
    start: '181',
    dur: '4.5',
    text: 'will be done behind the scenes by that'
  },
  {
    start: '182.469',
    dur: '7.86',
    text: 'package the other package I will install'
  },
  {
    start: '185.5',
    dur: '6.959',
    text: 'is called just graph QL the graph QL'
  },
  {
    start: '190.329',
    dur: '6',
    text: 'package in the end will allow us to'
  },
  {
    start: '192.459',
    dur: '6.081',
    text: 'define the schema and set up a schema'
  },
  {
    start: '196.329',
    dur: '4.8',
    text: 'that follows the official graph QL'
  },
  {
    start: '198.54',
    dur: '5.08',
    text: 'specification and definitions and that'
  },
  {
    start: '201.129',
    dur: '5.28',
    text: 'will give us a valid schema it will not'
  },
  {
    start: '203.62',
    dur: '5.31',
    text: 'just check it it will also basically'
  },
  {
    start: '206.409',
    dur: '4.47',
    text: 'convert it to JavaScript code to'
  },
  {
    start: '208.93',
    dur: '3.929',
    text: 'JavaScript objects you could say so it'
  },
  {
    start: '210.879',
    dur: '4.17',
    text: 'will parse our schema and converted and'
  },
  {
    start: '212.859',
    dur: '4.201',
    text: 'we can then use this parsed and'
  },
  {
    start: '215.049',
    dur: '4.5',
    text: 'converted schema together with Express'
  },
  {
    start: '217.06',
    dur: '4.409',
    text: 'graph QL you could say so these are the'
  },
  {
    start: '219.549',
    dur: '3.66',
    text: 'two packages we need and I will just hit'
  },
  {
    start: '221.469',
    dur: '5.01',
    text: 'enter and how we use them will become'
  },
  {
    start: '223.209',
    dur: '5.581',
    text: 'clearer in a second with both installed'
  },
  {
    start: '226.479',
    dur: '4.5',
    text: "I'll run NPM start again to bring up"
  },
  {
    start: '228.79',
    dur: '4.349',
    text: 'that development server again and now'
  },
  {
    start: '230.979',
    dur: '4.71',
    text: "let's start setting up our graph QL"
  },
  {
    start: '233.139',
    dur: '4.651',
    text: 'environment and schema here for that'
  },
  {
    start: '235.689',
    dur: '3.69',
    text: "I'll go to the App J's file and here at"
  },
  {
    start: '237.79',
    dur: '3.809',
    text: 'one a m-- word something from that'
  },
  {
    start: '239.379',
    dur: '6.42',
    text: "Express graphical package I'll name it"
  },
  {
    start: '241.599',
    dur: '6.901',
    text: 'graph QL HTTP the name is up to you'
  },
  {
    start: '245.799',
    dur: '4.89',
    text: 'though and I will simply import that by'
  },
  {
    start: '248.5',
    dur: '5.34',
    text: 'requiring the Express graphical package'
  },
  {
    start: '250.689',
    dur: '6.36',
    text: 'this package essentially exports one'
  },
  {
    start: '253.84',
    dur: '5.819',
    text: 'thing and that thing that graph QL HTTP'
  },
  {
    start: '257.049',
    dur: '5.071',
    text: 'here happens to be a function that we'
  },
  {
    start: '259.659',
    dur: '4.771',
    text: 'can use in the place where express'
  },
  {
    start: '262.12',
    dur: '4.2',
    text: 'expects a middleware function so it'
  },
  {
    start: '264.43',
    dur: '3.57',
    text: 'basically exports a valid middleware'
  },
  {
    start: '266.32',
    dur: '3.87',
    text: 'function and what this middleware'
  },
  {
    start: '268',
    dur: '4.169',
    text: 'function will do is it will take'
  },
  {
    start: '270.19',
    dur: '4.65',
    text: 'incoming requests and funnel them'
  },
  {
    start: '272.169',
    dur: '4.441',
    text: 'through the graph QL query parser and'
  },
  {
    start: '274.84',
    dur: '4.35',
    text: 'automatically forward them to the right'
  },
  {
    start: '276.61',
    dur: '6.179',
    text: 'resolvers and then will be our duty to'
  },
  {
    start: '279.19',
    dur: '5.19',
    text: 'set the resolver schemas up so how do we'
  },
  {
    start: '282.789',
    dur: '3.841',
    text: 'use this middleware well instead of'
  },
  {
    start: '284.38',
    dur: '6.24',
    text: 'having this get request here I will now'
  },
  {
    start: '286.63',
    dur: '6.689',
    text: 'add a normal app use statement and here'
  },
  {
    start: '290.62',
    dur: '6.449',
    text: 'I want to handle requests that'
  },
  {
    start: '293.319',
    dur: '6.87',
    text: 'our graph QL endpoint now remember the'
  },
  {
    start: '297.069',
    dur: '5.94',
    text: 'first video in this series there I'
  },
  {
    start: '300.189',
    dur: '5.22',
    text: 'mentioned that with graph QL you have'
  },
  {
    start: '303.009',
    dur: '6.78',
    text: 'only one endpoint to which all requests'
  },
  {
    start: '305.409',
    dur: '7.62',
    text: 'are sent typically this is reached under'
  },
  {
    start: '309.789',
    dur: '6.451',
    text: 'the graph QL path of your domain so'
  },
  {
    start: '313.029',
    dur: '4.651',
    text: 'yourdomain.com slash graph ul you can'
  },
  {
    start: '316.24',
    dur: '4.109',
    text: 'name this however you want though you'
  },
  {
    start: '317.68',
    dur: '5.519',
    text: 'could always use slash API or whatever'
  },
  {
    start: '320.349',
    dur: '4.62',
    text: "you want I'll go with graph QL the"
  },
  {
    start: '323.199',
    dur: '4.05',
    text: 'second argument here is our middleware'
  },
  {
    start: '324.969',
    dur: '4.5',
    text: "function then that is normal Express J's"
  },
  {
    start: '327.249',
    dur: '4.95',
    text: 'code and the middleware function here is'
  },
  {
    start: '329.469',
    dur: '5.88',
    text: 'our graph QL HTTP function we imported'
  },
  {
    start: '332.199',
    dur: '6.12',
    text: 'from the Express graph QL package now in'
  },
  {
    start: '335.349',
    dur: '6.18',
    text: 'there we pass a JavaScript object where'
  },
  {
    start: '338.319',
    dur: '5.1',
    text: 'we configure our graph QL API because'
  },
  {
    start: '341.529',
    dur: '4.97',
    text: 'this Express graphical package basically'
  },
  {
    start: '343.419',
    dur: '5.851',
    text: 'needs some information pieces from us'
  },
  {
    start: '346.499',
    dur: '6.431',
    text: 'where do I find your schema which'
  },
  {
    start: '349.27',
    dur: '6.03',
    text: 'defines the does the endpoints so to say'
  },
  {
    start: '352.93',
    dur: '4.349',
    text: 'the real endpoints you can handle so'
  },
  {
    start: '355.3',
    dur: '4.949',
    text: 'which defines the queries you can handle'
  },
  {
    start: '357.279',
    dur: '5.85',
    text: 'where do I find the resolvers to which'
  },
  {
    start: '360.249',
    dur: '6',
    text: 'my request should be forwarded once I'
  },
  {
    start: '363.129',
    dur: '6.51',
    text: 'identified the query this request wants'
  },
  {
    start: '366.249',
    dur: '5.46',
    text: 'to execute these are the questions we'
  },
  {
    start: '369.639',
    dur: '5.851',
    text: 'need to answer here and we do this by'
  },
  {
    start: '371.709',
    dur: '6.51',
    text: 'passing two keys here in this object to'
  },
  {
    start: '375.49',
    dur: '4.859',
    text: 'properties the first one is the schema'
  },
  {
    start: '378.219',
    dur: '5.88',
    text: 'property and this should point at a'
  },
  {
    start: '380.349',
    dur: '5.34',
    text: 'valid graph QL schema now we will be'
  },
  {
    start: '384.099',
    dur: '3.96',
    text: 'able to generate this graph called'
  },
  {
    start: '385.689',
    dur: '4.921',
    text: 'schema with help of that other package'
  },
  {
    start: '388.059',
    dur: '5.371',
    text: 'we install data graph QL package so for'
  },
  {
    start: '390.61',
    dur: '7.649',
    text: "now let's just pointed at null the other"
  },
  {
    start: '393.43',
    dur: '7.319',
    text: 'key we have here is our root value key'
  },
  {
    start: '398.259',
    dur: '5.43',
    text: 'and that will in the end point at an'
  },
  {
    start: '400.749',
    dur: '5.78',
    text: 'object a javascript object which has all'
  },
  {
    start: '403.689',
    dur: '5.97',
    text: 'the resolver functions in it and'
  },
  {
    start: '406.529',
    dur: '6.31',
    text: 'resolver functions need to match our'
  },
  {
    start: '409.659',
    dur: '4.8',
    text: 'schema and points by name and this will'
  },
  {
    start: '412.839',
    dur: '5.43',
    text: 'become clearer once we add our first'
  },
  {
    start: '414.459',
    dur: '6.3',
    text: 'schema and our first resolver so now'
  },
  {
    start: '418.269',
    dur: '5.73',
    text: 'that we add these two keys we are almost'
  },
  {
    start: '420.759',
    dur: '5.611',
    text: 'ready to make our graph QL API work of'
  },
  {
    start: '423.999',
    dur: '3.151',
    text: "course it's not doing much though so"
  },
  { start: '426.37', dur: '3.78', text: "let's add" },
  {
    start: '427.15',
    dur: '7.29',
    text: 'schema and for adding a schema I will'
  },
  {
    start: '430.15',
    dur: '6.84',
    text: 'import something from that require from'
  },
  {
    start: '434.44',
    dur: '5.85',
    text: 'that graph QL package so I will require'
  },
  {
    start: '436.99',
    dur: '5.43',
    text: 'it from there now that something is an'
  },
  {
    start: '440.29',
    dur: '4.44',
    text: 'object and I could name it graph QL like'
  },
  {
    start: '442.42',
    dur: '4.38',
    text: 'this but I will use a modern JavaScript'
  },
  {
    start: '444.73',
    dur: '4.5',
    text: 'syntax which is called object D'
  },
  {
    start: '446.8',
    dur: '4.32',
    text: 'structuring which looks like this you'
  },
  {
    start: '449.23',
    dur: '4.38',
    text: 'have curly braces on the left side of'
  },
  {
    start: '451.12',
    dur: '5.79',
    text: 'the equal sign and now I can pull out'
  },
  {
    start: '453.61',
    dur: '5.37',
    text: 'properties of that out of that object'
  },
  {
    start: '456.91',
    dur: '3.87',
    text: 'which this package happens to export and'
  },
  {
    start: '458.98',
    dur: '4.14',
    text: 'I can store the values of these'
  },
  {
    start: '460.78',
    dur: '4.26',
    text: 'properties in equally named variables'
  },
  {
    start: '463.12',
    dur: '4.65',
    text: 'that are then available in this app.js'
  },
  {
    start: '465.04',
    dur: '6.33',
    text: 'file and here I need to build schema'
  },
  {
    start: '467.77',
    dur: '6.69',
    text: 'property which happens to be a function'
  },
  {
    start: '471.37',
    dur: '5.43',
    text: 'that takes a JavaScript template literal'
  },
  {
    start: '474.46',
    dur: '5.61',
    text: 'string which we can then use to define'
  },
  {
    start: '476.8',
    dur: '5.94',
    text: 'our schema so this built schema function'
  },
  {
    start: '480.07',
    dur: '4.95',
    text: 'takes a string and that string should'
  },
  {
    start: '482.74',
    dur: '4.23',
    text: 'define our schema at the advantage of'
  },
  {
    start: '485.02',
    dur: '5.22',
    text: 'this approaches that we can build our'
  },
  {
    start: '486.97',
    dur: '6.09',
    text: 'schema as a string so in a convenient'
  },
  {
    start: '490.24',
    dur: '5.31',
    text: 'written form and the heavy-lifting of'
  },
  {
    start: '493.06',
    dur: '4.68',
    text: 'converting this to JavaScript objects'
  },
  {
    start: '495.55',
    dur: '4.83',
    text: 'and so on is taken care of by this graph'
  },
  {
    start: '497.74',
    dur: '5.16',
    text: 'QL package so this graphical package'
  },
  {
    start: '500.38',
    dur: '4.43',
    text: 'will generate a graph QL schema object'
  },
  {
    start: '502.9',
    dur: '4.41',
    text: 'in the end based on our written schema'
  },
  {
    start: '504.81',
    dur: '5.59',
    text: 'we used it down here where we need to'
  },
  {
    start: '507.31',
    dur: '5.64',
    text: 'pass such a graph QL schema there I call'
  },
  {
    start: '510.4',
    dur: '4.62',
    text: 'build schema and here I will pass a'
  },
  {
    start: '512.95',
    dur: '4.35',
    text: 'template literal so that we can write a'
  },
  {
    start: '515.02',
    dur: '4.44',
    text: 'multi-line string in here this is a'
  },
  {
    start: '517.3',
    dur: '4.62',
    text: "normal JavaScript string I'm just using"
  },
  {
    start: '519.46',
    dur: '4.86',
    text: 'back text here because backticks allow'
  },
  {
    start: '521.92',
    dur: '3.32',
    text: 'me to write a multi-line string here in'
  },
  { start: '524.32', dur: '5.52', text: 'JavaScript' },
  {
    start: '525.24',
    dur: '7.78',
    text: 'now queue define that schema we need to'
  },
  {
    start: '529.84',
    dur: '5.76',
    text: 'add a schema key here so this schema'
  },
  {
    start: '533.02',
    dur: '5.88',
    text: 'keyword needs to be present then we add'
  },
  {
    start: '535.6',
    dur: '7.05',
    text: 'curly braces and now here we have to'
  },
  {
    start: '538.9',
    dur: '7.35',
    text: 'define Q special keys one is named query'
  },
  {
    start: '542.65',
    dur: '6.21',
    text: 'and one is named mutation now incoming'
  },
  {
    start: '546.25',
    dur: '4.46',
    text: 'graphical requests no queries which'
  },
  {
    start: '548.86',
    dur: '4.02',
    text: 'means we want to fetch data and'
  },
  {
    start: '550.71',
    dur: '4.84',
    text: 'mutations which means we want to change'
  },
  {
    start: '552.88',
    dur: '4.74',
    text: 'data well there also are subscriptions'
  },
  {
    start: '555.55',
    dur: '4.14',
    text: "but we'll ignore them for now so we have"
  },
  {
    start: '557.62',
    dur: '3.269',
    text: 'queries for fetching data and mutations'
  },
  { start: '559.69', dur: '3.149', text: 'for changing data' },
  {
    start: '560.889',
    dur: '5.55',
    text: 'changing data includes creating it'
  },
  {
    start: '562.839',
    dur: '7.35',
    text: 'updating it or deleting it so we need to'
  },
  {
    start: '566.439',
    dur: '6.81',
    text: 'have these two route commands so to say'
  },
  {
    start: '570.189',
    dur: '5.221',
    text: 'in this schema object and this also has'
  },
  {
    start: '573.249',
    dur: '4.981',
    text: 'to be named schema this is all required'
  },
  {
    start: '575.41',
    dur: '5.489',
    text: 'because always remember graph QL has a'
  },
  {
    start: '578.23',
    dur: '5.189',
    text: 'specification which defines all these'
  },
  {
    start: '580.899',
    dur: '5.641',
    text: 'things so by adhering to this standard'
  },
  {
    start: '583.419',
    dur: '5.4',
    text: 'packages like graph QL can do their job'
  },
  {
    start: '586.54',
    dur: '4.709',
    text: 'and can actually parse our string here'
  },
  {
    start: '588.819',
    dur: '4.14',
    text: 'into a valid graph fill schema object'
  },
  {
    start: '591.249',
    dur: '3.93',
    text: 'because they are looking for certain'
  },
  {
    start: '592.959',
    dur: '4.201',
    text: 'keywords this build schema method here'
  },
  {
    start: '595.179',
    dur: '5.37',
    text: 'where this function is looking for a'
  },
  {
    start: '597.16',
    dur: '7.589',
    text: 'specific keywords so we have these two'
  },
  {
    start: '600.549',
    dur: '5.97',
    text: 'route keywords in this schema object you'
  },
  {
    start: '604.749',
    dur: '4.89',
    text: 'can basically say we have two properties'
  },
  {
    start: '606.519',
    dur: '4.951',
    text: 'in this schema object here now how does'
  },
  {
    start: '609.639',
    dur: '4.771',
    text: 'a query look like what is a query here'
  },
  {
    start: '611.47',
    dur: '5.219',
    text: 'and what is a mutation well obviously we'
  },
  {
    start: '614.41',
    dur: '4.019',
    text: 'have more than one query we want to'
  },
  {
    start: '616.689',
    dur: '3.81',
    text: 'support maybe we want to be able to'
  },
  {
    start: '618.429',
    dur: '5.28',
    text: 'fetch a list of events in a list of'
  },
  {
    start: '620.499',
    dur: '4.74',
    text: 'users and data for a single event and we'
  },
  {
    start: '623.709',
    dur: '3.36',
    text: 'want to be able to mutate different'
  },
  {
    start: '625.239',
    dur: '4.921',
    text: 'things create an event create a user'
  },
  {
    start: '627.069',
    dur: '5.69',
    text: "update an event so we can't just map"
  },
  {
    start: '630.16',
    dur: '5.729',
    text: 'this property to exactly one action'
  },
  {
    start: '632.759',
    dur: '5.01',
    text: 'instead what we use here is we use'
  },
  {
    start: '635.889',
    dur: '5.37',
    text: 'another feature of the graph QL'
  },
  {
    start: '637.769',
    dur: '7.18',
    text: 'specification and that is types that'
  },
  {
    start: '641.259',
    dur: '6.75',
    text: 'graph QL language is a typed language it'
  },
  {
    start: '644.949',
    dur: '6.8',
    text: 'works with types to define what a'
  },
  {
    start: '648.009',
    dur: '6.81',
    text: 'certain end point returns and so on and'
  },
  {
    start: '651.749',
    dur: '5.59',
    text: 'for that or therefore we can create a'
  },
  {
    start: '654.819',
    dur: '5.94',
    text: 'new type with the type keyword again a'
  },
  {
    start: '657.339',
    dur: '6.09',
    text: 'keyword you have to use and there you'
  },
  {
    start: '660.759',
    dur: '4.68',
    text: "can name this now however you want I'll"
  },
  {
    start: '663.429',
    dur: '4.231',
    text: 'name it route query but this could be'
  },
  {
    start: '665.439',
    dur: '4.411',
    text: 'named differently and this now also is'
  },
  {
    start: '667.66',
    dur: '5.31',
    text: "an object and in this object we'll"
  },
  {
    start: '669.85',
    dur: '5.609',
    text: 'define different real endpoints we'
  },
  {
    start: '672.97',
    dur: '5.19',
    text: "support for incoming queries and I'll do"
  },
  {
    start: '675.459',
    dur: '4.53',
    text: 'the same for a mutation here I have my'
  },
  {
    start: '678.16',
    dur: '3.869',
    text: 'route mutation this could also be named'
  },
  {
    start: '679.989',
    dur: '5.52',
    text: 'differently and there I will define my'
  },
  {
    start: '682.029',
    dur: '4.71',
    text: 'different mutations in this query so in'
  },
  { start: '685.509', dur: '3.39', text: 'the schema object on there' },
  {
    start: '686.739',
    dur: '4.26',
    text: 'I will now point at route query which'
  },
  {
    start: '688.899',
    dur: '4.89',
    text: 'will basically bundle all my supported'
  },
  {
    start: '690.999',
    dur: '3.791',
    text: 'queries and for the mutation I will'
  },
  { start: '693.789', dur: '3.251', text: 'point at route' },
  {
    start: '694.79',
    dur: '5.1',
    text: 'which bundles all my support mutations'
  },
  {
    start: '697.04',
    dur: '6.06',
    text: 'and now we can add as many queries and'
  },
  {
    start: '699.89',
    dur: '5.61',
    text: 'as many mutations here as we want now if'
  },
  {
    start: '703.1',
    dur: '4.41',
    text: "you're coming from a rest api world this"
  },
  {
    start: '705.5',
    dur: '4.74',
    text: 'looks super strange at the beginning and'
  },
  {
    start: '707.51',
    dur: '5.16',
    text: "I'm totally aware of this writing this"
  },
  {
    start: '710.24',
    dur: '4.92',
    text: 'code here writing this string'
  },
  {
    start: '712.67',
    dur: '4.83',
    text: "essentially that's not very intuitive if"
  },
  {
    start: '715.16',
    dur: '4.74',
    text: 'you previously defined routes and had'
  },
  {
    start: '717.5',
    dur: '4.35',
    text: 'your middleware functions or your'
  },
  {
    start: '719.9',
    dur: '3.9',
    text: 'controllers doing something when a'
  },
  {
    start: '721.85',
    dur: '3.99',
    text: 'request hits that route but you always'
  },
  {
    start: '723.8',
    dur: '4.92',
    text: 'have to remember that graph QL simply'
  },
  {
    start: '725.84',
    dur: '5.31',
    text: 'works differently graph QL still gives'
  },
  {
    start: '728.72',
    dur: '4.65',
    text: 'you an API but this API is not'
  },
  {
    start: '731.15',
    dur: '5.01',
    text: 'controlled by different routes or'
  },
  {
    start: '733.37',
    dur: '5.19',
    text: 'endpoints but it exposes a full query'
  },
  {
    start: '736.16',
    dur: '4.76',
    text: 'language to the fronted and therefore we'
  },
  {
    start: '738.56',
    dur: '5.31',
    text: 'need to define our own interpretation'
  },
  {
    start: '740.92',
    dur: '4.9',
    text: 'for this query language behind the'
  },
  {
    start: '743.87',
    dur: '5.91',
    text: 'scenes on the back end or we basically'
  },
  {
    start: '745.82',
    dur: '6.51',
    text: 'need to well define what commands we'
  },
  {
    start: '749.78',
    dur: '4.89',
    text: 'want to support what data you can fetch'
  },
  {
    start: '752.33',
    dur: '5.04',
    text: 'and that is also a reason why graph QL'
  },
  {
    start: '754.67',
    dur: '4.92',
    text: 'uses types because this makes it easy'
  },
  {
    start: '757.37',
    dur: '4.86',
    text: 'for us to talk about one at the same'
  },
  {
    start: '759.59',
    dur: '4.86',
    text: 'thing we are very clear about which data'
  },
  {
    start: '762.23',
    dur: '4.98',
    text: 'a certain endpoint returns and which'
  },
  {
    start: '764.45',
    dur: '5.37',
    text: 'data a certain field holds but step by'
  },
  {
    start: '767.21',
    dur: '4.62',
    text: 'step we are not returning anything at'
  },
  {
    start: '769.82',
    dur: '4.68',
    text: 'this point we have our route Korea and'
  },
  {
    start: '771.83',
    dur: '5.94',
    text: 'region route mutation object but both do'
  },
  {
    start: '774.5',
    dur: '4.83',
    text: "not hold any data now let's say here in"
  },
  {
    start: '777.77',
    dur: '3.78',
    text: 'the route query we want to be able to'
  },
  {
    start: '779.33',
    dur: '4.17',
    text: 'return a list of events so we might'
  },
  {
    start: '781.55',
    dur: '4.38',
    text: 'support a command which is called events'
  },
  {
    start: '783.5',
    dur: '4.23',
    text: 'you could also think that you use get'
  },
  {
    start: '785.93',
    dur: '3.72',
    text: 'events and you could absolutely name it'
  },
  {
    start: '787.73',
    dur: '4.85',
    text: "like this but it's pretty common in"
  },
  {
    start: '789.65',
    dur: '5.37',
    text: 'graph QL to basically treat this'
  },
  {
    start: '792.58',
    dur: '4.93',
    text: 'regarding its naming as if it were a'
  },
  {
    start: '795.02',
    dur: '4.77',
    text: 'property of an object and in an object'
  },
  {
    start: '797.51',
    dur: '4.26',
    text: 'you would have an events property that'
  },
  {
    start: '799.79',
    dur: '3.66',
    text: 'holds a list of all events right and'
  },
  {
    start: '801.77',
    dur: '3.99',
    text: 'therefore we named this events here too'
  },
  {
    start: '803.45',
    dur: '4.29',
    text: 'because we basically think of it as'
  },
  {
    start: '805.76',
    dur: '4.23',
    text: 'being accessed like a property on an'
  },
  {
    start: '807.74',
    dur: '4.47',
    text: 'object that magically holds a list of'
  },
  {
    start: '809.99',
    dur: '5.04',
    text: 'all that data this should return in this'
  },
  {
    start: '812.21',
    dur: '5.49',
    text: 'case a list of events so here we have a'
  },
  {
    start: '815.03',
    dur: '6.39',
    text: 'list of events and this query also'
  },
  {
    start: '817.7',
    dur: '5.58',
    text: 'returns some data of course we signal'
  },
  {
    start: '821.42',
    dur: '3.33',
    text: 'the return type by adding a colon and'
  },
  {
    start: '823.28',
    dur: '4.2',
    text: 'then on the rights of the colon we have'
  },
  {
    start: '824.75',
    dur: '3.84',
    text: "the data that is returned here let's"
  },
  {
    start: '827.48',
    dur: '3.81',
    text: "keep it simple and let's say"
  },
  {
    start: '828.59',
    dur: '5.97',
    text: 'this is a list of strings an array of'
  },
  {
    start: '831.29',
    dur: '6.54',
    text: 'strings in graph QL world or in the'
  },
  {
    start: '834.56',
    dur: '5.97',
    text: 'graph QL specification you define a list'
  },
  {
    start: '837.83',
    dur: '4.8',
    text: 'of something so you basically say hey'
  },
  {
    start: '840.53',
    dur: '4.05',
    text: 'this will return a list of something by'
  },
  {
    start: '842.63',
    dur: '4.83',
    text: 'adding square brackets on the right side'
  },
  {
    start: '844.58',
    dur: '5.28',
    text: 'of the colon and then inside of these'
  },
  {
    start: '847.46',
    dur: '4.29',
    text: 'square brackets you add the type of data'
  },
  {
    start: '849.86',
    dur: '3.63',
    text: 'that is inside of the list so here if we'
  },
  {
    start: '851.75',
    dur: '4.71',
    text: 'have a list of strings being returned'
  },
  {
    start: '853.49',
    dur: '5.4',
    text: 'then I add string here graph QL supports'
  },
  {
    start: '856.46',
    dur: '5.4',
    text: 'a couple of types strings integers'
  },
  {
    start: '858.89',
    dur: '4.77',
    text: 'floats boolean and you can learn all'
  },
  {
    start: '861.86',
    dur: '3.99',
    text: 'about that in the original graph killed'
  },
  {
    start: '863.66',
    dur: '3.93',
    text: 'ox of course and there are more types'
  },
  {
    start: '865.85',
    dur: '3.66',
    text: 'than the ones I just mentioned we will'
  },
  {
    start: '867.59',
    dur: '3.99',
    text: 'also see a lot of types throughout this'
  },
  {
    start: '869.51',
    dur: '3.48',
    text: 'serious dough string is one of the'
  },
  {
    start: '871.58',
    dur: '4.35',
    text: 'built-in types make sure it has a'
  },
  {
    start: '872.99',
    dur: '4.68',
    text: 'capital S and I want to make clear that'
  },
  {
    start: '875.93',
    dur: '4.8',
    text: 'this will always return a list of'
  },
  {
    start: '877.67',
    dur: '4.77',
    text: 'strings and I can do this by adding an'
  },
  {
    start: '880.73',
    dur: '3.54',
    text: 'exclamation mark after string so it'
  },
  {
    start: '882.44',
    dur: '3.81',
    text: "can't be a list of null of values"
  },
  {
    start: '884.27',
    dur: '3.66',
    text: "basically this means it's not nullable"
  },
  {
    start: '886.25',
    dur: '4.11',
    text: 'it will always return a list of strings'
  },
  {
    start: '887.93',
    dur: '4.65',
    text: 'and it will always return a list and not'
  },
  {
    start: '890.36',
    dur: '3.81',
    text: 'just null it might be an empty list that'
  },
  {
    start: '892.58',
    dur: '4.11',
    text: 'would be valid but not a list of'
  },
  {
    start: '894.17',
    dur: '5.82',
    text: 'multiple null objects and also not null'
  },
  {
    start: '896.69',
    dur: '5.64',
    text: 'as a response so this is our query now'
  },
  {
    start: '899.99',
    dur: '5.52',
    text: "let's also add a mutation here we would"
  },
  {
    start: '902.33',
    dur: '4.98',
    text: 'probably create an event and just as'
  },
  {
    start: '905.51',
    dur: '4.59',
    text: 'when we work with normal JavaScript'
  },
  {
    start: '907.31',
    dur: '5.31',
    text: 'objects creating or updating and so on'
  },
  {
    start: '910.1',
    dur: '4.41',
    text: 'so basically not getting data there we'
  },
  {
    start: '912.62',
    dur: '4.23',
    text: 'would typically call a function or a'
  },
  {
    start: '914.51',
    dur: '4.38',
    text: 'method on an object and hence we will'
  },
  {
    start: '916.85',
    dur: '5.67',
    text: 'name this mutation just as we would name'
  },
  {
    start: '918.89',
    dur: '6.2',
    text: 'a function we would not name it event we'
  },
  {
    start: '922.52',
    dur: '6.24',
    text: 'would name it create event typically'
  },
  {
    start: '925.09',
    dur: '6.76',
    text: 'create event is what we create and there'
  },
  {
    start: '928.76',
    dur: '4.89',
    text: "let's say we expect one value the name"
  },
  {
    start: '931.85',
    dur: '4.5',
    text: 'we can name this however we want and'
  },
  {
    start: '933.65',
    dur: '4.8',
    text: 'then the type of this signal by adding a'
  },
  {
    start: '936.35',
    dur: '5.9',
    text: 'colon after it also will be a string and'
  },
  {
    start: '938.45',
    dur: '6.39',
    text: "this then might return let's say a"
  },
  {
    start: '942.25',
    dur: '4.57',
    text: 'string again so maybe it just echoes'
  },
  {
    start: '944.84',
    dur: '5.45',
    text: 'back the name of the event we wanted to'
  },
  {
    start: '946.82',
    dur: '6.81',
    text: 'create now we have to find these two'
  },
  {
    start: '950.29',
    dur: '5.5',
    text: 'commands or these two properties of our'
  },
  {
    start: '953.63',
    dur: '6.33',
    text: 'root query and of the root mutation our'
  },
  {
    start: '955.79',
    dur: '6.419',
    text: 'graph QL API should support now this is'
  },
  {
    start: '959.96',
    dur: '4.469',
    text: 'the first step this can now be parsed'
  },
  {
    start: '962.209',
    dur: '5.31',
    text: 'and this is now what we exposed to the'
  },
  {
    start: '964.429',
    dur: '5.46',
    text: 'front end however when we send requests'
  },
  {
    start: '967.519',
    dur: '5.16',
    text: 'nothing will happen right now because'
  },
  {
    start: '969.889',
    dur: '6.12',
    text: 'whilst we do have our schema in place we'
  },
  {
    start: '972.679',
    dur: '6.061',
    text: 'got no logic to act on incoming requests'
  },
  {
    start: '976.009',
    dur: '4.83',
    text: 'that request a list of data or that want'
  },
  {
    start: '978.74',
    dur: '6.42',
    text: 'to add an event with the creative event'
  },
  {
    start: '980.839',
    dur: '7.59',
    text: 'mutation and we add this logic in the'
  },
  {
    start: '985.16',
    dur: '5.13',
    text: 'root value in the resolver here so this'
  },
  {
    start: '988.429',
    dur: '5.28',
    text: 'is simply called resolver in the graph'
  },
  {
    start: '990.29',
    dur: '6.089',
    text: 'QL world and this root value is a bundle'
  },
  {
    start: '993.709',
    dur: '5.61',
    text: 'of all the resolvers we have now here is'
  },
  {
    start: '996.379',
    dur: '4.71',
    text: 'one important thing that resolvers for'
  },
  {
    start: '999.319',
    dur: '4.95',
    text: 'your commands like events and create'
  },
  {
    start: '1001.089',
    dur: '7.261',
    text: 'event needs to have the exact same names'
  },
  {
    start: '1004.269',
    dur: '7.5',
    text: 'so if you have an events query here then'
  },
  {
    start: '1008.35',
    dur: '6.089',
    text: 'you need to have an events resolver here'
  },
  {
    start: '1011.769',
    dur: '5.6',
    text: 'so events key in that resolver object'
  },
  {
    start: '1014.439',
    dur: '5.34',
    text: "and it's the same for this mutation"
  },
  {
    start: '1017.369',
    dur: '4.72',
    text: 'important of course you should name your'
  },
  {
    start: '1019.779',
    dur: '5.491',
    text: 'queries and mutations such that they'
  },
  {
    start: '1022.089',
    dur: '5.551',
    text: "don't clash graph QL has no namespaces"
  },
  {
    start: '1025.27',
    dur: '5.809',
    text: 'and so on so each name here really is'
  },
  {
    start: '1027.64',
    dur: '6.63',
    text: 'unique events here matches events here'
  },
  {
    start: '1031.079',
    dur: '5.95',
    text: 'now with that how does a resolver look'
  },
  {
    start: '1034.27',
    dur: '6.6',
    text: 'like well a resolver is really just a'
  },
  {
    start: '1037.029',
    dur: '5.731',
    text: 'function so events here is a function in'
  },
  {
    start: '1040.87',
    dur: '3.659',
    text: "this resolver object and I'm just"
  },
  {
    start: '1042.76',
    dur: '4.919',
    text: 'assigning an anonymous arrow function'
  },
  {
    start: '1044.529',
    dur: '6.061',
    text: 'here this is how a resolver looks like'
  },
  {
    start: '1047.679',
    dur: '5.071',
    text: 'this function will be called for you by'
  },
  {
    start: '1050.59',
    dur: '4.949',
    text: 'the Express graph QL package in the end'
  },
  {
    start: '1052.75',
    dur: '4.71',
    text: 'when an incoming request looks for this'
  },
  {
    start: '1055.539',
    dur: '4.49',
    text: 'events properties when an incoming'
  },
  {
    start: '1057.46',
    dur: '5.849',
    text: 'requests requests this events property'
  },
  {
    start: '1060.029',
    dur: '5.441',
    text: 'so here we just want to return our list'
  },
  {
    start: '1063.309',
    dur: '4.531',
    text: 'of events then and of course here'
  },
  {
    start: '1065.47',
    dur: '5.339',
    text: "without a databases on we can't just"
  },
  {
    start: '1067.84',
    dur: '5.699',
    text: 'return what we promised to return a list'
  },
  {
    start: '1070.809',
    dur: '9.98',
    text: 'of strings so I will return an array'
  },
  {
    start: '1073.539',
    dur: '14.401',
    text: 'here with a list of events like romantic'
  },
  {
    start: '1080.789',
    dur: '11.231',
    text: 'cooking sailing and all night'
  },
  {
    start: '1087.94',
    dur: '6.75',
    text: 'coding this is now my events resolver'
  },
  {
    start: '1092.02',
    dur: '3.87',
    text: 'which will trigger for queries currying'
  },
  { start: '1094.69', dur: '3.84', text: 'for if' },
  {
    start: '1095.89',
    dur: '4.77',
    text: "now let's also add a resolver for create"
  },
  {
    start: '1098.53',
    dur: '4.41',
    text: 'event for Dettol add a second property'
  },
  {
    start: '1100.66',
    dur: '4.8',
    text: 'in this route value so in our merged'
  },
  {
    start: '1102.94',
    dur: '4.92',
    text: 'resolver and this has to be named create'
  },
  {
    start: '1105.46',
    dur: '2.88',
    text: "event because it's named creative end up"
  },
  { start: '1107.86', dur: '3.42', text: 'there' },
  {
    start: '1108.34',
    dur: '5.34',
    text: 'this also is a function and this'
  },
  {
    start: '1111.28',
    dur: '5.61',
    text: 'function now also receives an argument'
  },
  {
    start: '1113.68',
    dur: '5.43',
    text: 'to be precise and our X object this is'
  },
  {
    start: '1116.89',
    dur: '4.35',
    text: 'an object holding all the arguments this'
  },
  {
    start: '1119.11',
    dur: '6',
    text: "might have gotten I didn't talk much"
  },
  {
    start: '1121.24',
    dur: '7.53',
    text: 'about it but this actually obviously is'
  },
  {
    start: '1125.11',
    dur: '6.06',
    text: 'a query a property that accepts a list'
  },
  {
    start: '1128.77',
    dur: '4.95',
    text: 'of arguments now you could also accept'
  },
  {
    start: '1131.17',
    dur: '4.83',
    text: 'arguments on queries that return data'
  },
  {
    start: '1133.72',
    dur: '4.709',
    text: "only and that don't mutate anything here"
  },
  {
    start: '1136',
    dur: '4.08',
    text: 'we could also for example filter events'
  },
  {
    start: '1138.429',
    dur: '4.711',
    text: 'that are booked so that could be a'
  },
  {
    start: '1140.08',
    dur: '3.45',
    text: "boolean this is also something we'll add"
  },
  { start: '1143.14', dur: '2.55', text: 'later' },
  {
    start: '1143.53',
    dur: '4.29',
    text: 'so argument lists can be added to any'
  },
  {
    start: '1145.69',
    dur: '3.989',
    text: 'query not just mutations for mutations'
  },
  {
    start: '1147.82',
    dur: '4.109',
    text: 'that often is the case though because'
  },
  {
    start: '1149.679',
    dur: '4.051',
    text: 'often we need data to make a mutation we'
  },
  {
    start: '1151.929',
    dur: '4.141',
    text: 'need to know which data to store we need'
  },
  {
    start: '1153.73',
    dur: '5.13',
    text: 'to know which ID or which event with'
  },
  {
    start: '1156.07',
    dur: '6.06',
    text: 'which ID to delete so here we have an'
  },
  {
    start: '1158.86',
    dur: '6.02',
    text: 'argument list on this create event query'
  },
  {
    start: '1162.13',
    dur: '6.09',
    text: 'or on this create event operation and'
  },
  {
    start: '1164.88',
    dur: '5.32',
    text: 'therefore here we get this args object'
  },
  {
    start: '1168.22',
    dur: '3.57',
    text: 'we would get it here too by the way here'
  },
  {
    start: '1170.2',
    dur: '3.479',
    text: 'it will just be an empty object because'
  },
  {
    start: '1171.79',
    dur: '6.33',
    text: 'we have no arguments here we will have'
  },
  {
    start: '1173.679',
    dur: '7.921',
    text: 'arguments so we can now access our event'
  },
  {
    start: '1178.12',
    dur: '5.82',
    text: 'name with the name here on this args'
  },
  {
    start: '1181.6',
    dur: '6.48',
    text: 'object so event name can be retrieved'
  },
  {
    start: '1183.94',
    dur: '6.3',
    text: 'from our X dot name dot name because I'
  },
  {
    start: '1188.08',
    dur: '3.51',
    text: 'named it name up here if you named it'
  },
  {
    start: '1190.24',
    dur: '4.56',
    text: 'differently you have to name it'
  },
  {
    start: '1191.59',
    dur: '6.24',
    text: 'differently down there and then here I'
  },
  {
    start: '1194.8',
    dur: '5.43',
    text: 'will just return back dead event name as'
  },
  {
    start: '1197.83',
    dur: '4.65',
    text: "we have no database I can't really store"
  },
  {
    start: '1200.23',
    dur: '5.97',
    text: 'it somewhere so for now this is my'
  },
  {
    start: '1202.48',
    dur: '7.17',
    text: 'simple graph QL API now to see it in'
  },
  {
    start: '1206.2',
    dur: '5.88',
    text: 'action we got a couple of options option'
  },
  {
    start: '1209.65',
    dur: '5.46',
    text: 'number one is that we simply send a post'
  },
  {
    start: '1212.08',
    dur: '5.58',
    text: 'request to slash graph QL and we try to'
  },
  {
    start: '1215.11',
    dur: '5.43',
    text: 'write a valid graph QL statement in that'
  },
  {
    start: '1217.66',
    dur: '4.89',
    text: 'post request and that valid graph QL'
  },
  {
    start: '1220.54',
    dur: '4.23',
    text: 'statement would be a post request with a'
  },
  {
    start: '1222.55',
    dur: '4.71',
    text: 'request body where you have a string as'
  },
  {
    start: '1224.77',
    dur: '4.039',
    text: 'a request body with your graph fuel data'
  },
  { start: '1227.26', dur: '4.19', text: 'in it now' },
  {
    start: '1228.809',
    dur: '4.651',
    text: 'we will take care of this later because'
  },
  {
    start: '1231.45',
    dur: '4.559',
    text: "it's a little more complex and you can"
  },
  {
    start: '1233.46',
    dur: '5.039',
    text: 'pass extra data for now we will use a'
  },
  {
    start: '1236.009',
    dur: '5.49',
    text: 'built-in debugging and development tool'
  },
  {
    start: '1238.499',
    dur: '5.461',
    text: 'which Express graph QL ships with and we'
  },
  {
    start: '1241.499',
    dur: '5.611',
    text: 'can unlock this tool by adding a third'
  },
  {
    start: '1243.96',
    dur: '5.429',
    text: 'property after schema and root value'
  },
  {
    start: '1247.11',
    dur: '5.639',
    text: 'which we passed to that object we pass'
  },
  {
    start: '1249.389',
    dur: '6.42',
    text: 'to graph QL HTTP and that is the'
  },
  {
    start: '1252.749',
    dur: '5.701',
    text: 'graphical property and by setting this'
  },
  {
    start: '1255.809',
    dur: '4.95',
    text: 'to true we get a special URL we can'
  },
  {
    start: '1258.45',
    dur: '4.229',
    text: 'visit where we get this nice user'
  },
  {
    start: '1260.759',
    dur: '3.961',
    text: 'interface you saw in the first video of'
  },
  {
    start: '1262.679',
    dur: '4.801',
    text: 'this series where we can simply play'
  },
  {
    start: '1264.72',
    dur: '4.169',
    text: 'around with our API and test it so I'
  },
  {
    start: '1267.48',
    dur: '3.72',
    text: 'will now save this with all these'
  },
  {
    start: '1268.889',
    dur: '5.76',
    text: "changes made and now let's go back to"
  },
  {
    start: '1271.2',
    dur: '6.329',
    text: "the browser and on our page let's visit"
  },
  {
    start: '1274.649',
    dur: '5.37',
    text: 'slash graph QL and you will get this'
  },
  {
    start: '1277.529',
    dur: '4.291',
    text: 'nice graphical user interface here where'
  },
  {
    start: '1280.019',
    dur: '3.51',
    text: 'you can play around with your API and'
  },
  {
    start: '1281.82',
    dur: '3.809',
    text: 'the nice thing is that you even get auto'
  },
  {
    start: '1283.529',
    dur: '4.561',
    text: 'completion here how is auto completion'
  },
  {
    start: '1285.629',
    dur: '5.191',
    text: 'achieved well it fetches metadata about'
  },
  {
    start: '1288.09',
    dur: '4.949',
    text: 'your API behind the scenes and since'
  },
  {
    start: '1290.82',
    dur: '4.89',
    text: 'graphical is a typed language it knows'
  },
  {
    start: '1293.039',
    dur: '5.6',
    text: 'perfectly well which type of data for'
  },
  {
    start: '1295.71',
    dur: '6.419',
    text: 'example the create event query expects'
  },
  {
    start: '1298.639',
    dur: '5.41',
    text: 'so here how do we write a query now well'
  },
  {
    start: '1302.129',
    dur: '3.66',
    text: 'first of all you have to define which'
  },
  {
    start: '1304.049',
    dur: '4.171',
    text: 'kind of career you want to create a'
  },
  {
    start: '1305.789',
    dur: '5.191',
    text: 'normal query which fetches data or a'
  },
  {
    start: '1308.22',
    dur: '4.5',
    text: 'mutation which mutates something these'
  },
  {
    start: '1310.98',
    dur: '4.139',
    text: 'are the two keywords we have here we'
  },
  {
    start: '1312.72',
    dur: '4.26',
    text: 'also have subscription and fragment will'
  },
  {
    start: '1315.119',
    dur: '4.471',
    text: 'not take care about these two these are'
  },
  {
    start: '1316.98',
    dur: '5.789',
    text: 'the two main types of operations we have'
  },
  {
    start: '1319.59',
    dur: '6.089',
    text: 'now query is what I want to do here I'
  },
  {
    start: '1322.769',
    dur: '6.301',
    text: "want to get data let's say so after this"
  },
  {
    start: '1325.679',
    dur: '6.09',
    text: 'we could give this a name get events but'
  },
  {
    start: '1329.07',
    dur: '4.679',
    text: 'this is optional for now so I will just'
  },
  {
    start: '1331.769',
    dur: '3.571',
    text: 'add curly braces and again since this is'
  },
  {
    start: '1333.749',
    dur: '5.491',
    text: 'optional you can also omit the name and'
  },
  {
    start: '1335.34',
    dur: '6.449',
    text: 'then here you define your own action you'
  },
  {
    start: '1339.24',
    dur: '4.289',
    text: 'defined now we have only one query we'
  },
  {
    start: '1341.789',
    dur: '3.931',
    text: 'only have events because that create'
  },
  {
    start: '1343.529',
    dur: '5.52',
    text: 'event thing is a mutation right we map'
  },
  {
    start: '1345.72',
    dur: '5.039',
    text: 'it to mutation down there in our root'
  },
  {
    start: '1349.049',
    dur: '4.411',
    text: 'query which is mapped to the query'
  },
  {
    start: '1350.759',
    dur: '5.821',
    text: 'object we only or to the query property'
  },
  {
    start: '1353.46',
    dur: '6.689',
    text: 'we only have that events action so'
  },
  {
    start: '1356.58',
    dur: '5.88',
    text: 'therefore if we press ctrl white space'
  },
  { start: '1360.149', dur: '5.291', text: 'or a control blank here' },
  { start: '1362.46', dur: '3.959', text: 'we only see events in the' },
  { start: '1365.44', dur: '3.869', text: 'auto-completion' },
  {
    start: '1366.419',
    dur: '6.1',
    text: "we can't hit events here and then add"
  },
  {
    start: '1369.309',
    dur: '4.921',
    text: 'another pair of curly braces and now we'
  },
  {
    start: '1372.519',
    dur: '3.54',
    text: "can't define more because we have no"
  },
  {
    start: '1374.23',
    dur: '3.66',
    text: 'nested object that will be something we'
  },
  {
    start: '1376.059',
    dur: '3.631',
    text: 'can do later then we can pick the'
  },
  {
    start: '1377.89',
    dur: '4.62',
    text: 'properties of the events we want to get'
  },
  {
    start: '1379.69',
    dur: '5.459',
    text: 'here we can just request events like'
  },
  {
    start: '1382.51',
    dur: '4.74',
    text: 'this hit enter and indeed we get back'
  },
  {
    start: '1385.149',
    dur: '4.291',
    text: 'this object with the data key which'
  },
  {
    start: '1387.25',
    dur: '5.309',
    text: 'holds an object with DD key of our'
  },
  {
    start: '1389.44',
    dur: '5.339',
    text: 'action of our query events and then this'
  },
  {
    start: '1392.559',
    dur: '4.74',
    text: 'has the return value and if this return'
  },
  {
    start: '1394.779',
    dur: '4.681',
    text: 'value would be a nested object then we'
  },
  {
    start: '1397.299',
    dur: '4.641',
    text: 'could even dive into this with another'
  },
  {
    start: '1399.46',
    dur: '4.62',
    text: 'pair of curly braces here and pick the'
  },
  {
    start: '1401.94',
    dur: '3.64',
    text: 'fields we want to have and that is'
  },
  {
    start: '1404.08',
    dur: '3.39',
    text: "something we'll do later for now let's"
  },
  {
    start: '1405.58',
    dur: '4.979',
    text: 'stick with the simple example which'
  },
  {
    start: '1407.47',
    dur: '6.179',
    text: "proves that the API works now let's also"
  },
  {
    start: '1410.559',
    dur: '4.62',
    text: 'see a mutation action so mutation we'
  },
  {
    start: '1413.649',
    dur: '4.561',
    text: 'could give this a name to but I will'
  },
  {
    start: '1415.179',
    dur: '5.25',
    text: 'make it an anonymous mutation here hit'
  },
  {
    start: '1418.21',
    dur: '4.589',
    text: 'control space here again for auto'
  },
  {
    start: '1420.429',
    dur: '4.35',
    text: 'completion we only have to create event'
  },
  {
    start: '1422.799',
    dur: '3.901',
    text: 'mutations so this is filled in'
  },
  {
    start: '1424.779',
    dur: '4.77',
    text: 'automatically and this node takes'
  },
  {
    start: '1426.7',
    dur: '5.4',
    text: 'arguments so we should add a pair of'
  },
  {
    start: '1429.549',
    dur: '4.5',
    text: 'parentheses here and we have one'
  },
  {
    start: '1432.1',
    dur: '4.47',
    text: 'argument here which is of type string'
  },
  {
    start: '1434.049',
    dur: '5.931',
    text: "it's the name argument because I named"
  },
  {
    start: '1436.57',
    dur: '6.569',
    text: 'it name here and now if I hit enter'
  },
  {
    start: '1439.98',
    dur: '4.329',
    text: 'after a colon we define the value since'
  },
  {
    start: '1443.139',
    dur: '3.75',
    text: "it's a string it should go between"
  },
  {
    start: '1444.309',
    dur: '4.08',
    text: 'quotation marks and important these have'
  },
  {
    start: '1446.889',
    dur: '4.581',
    text: "to be double quotation marks you'll get"
  },
  {
    start: '1448.389',
    dur: '9.571',
    text: 'an error otherwise and all named is'
  },
  {
    start: '1451.47',
    dur: '9.1',
    text: 'sports and hit enter and did you see'
  },
  {
    start: '1457.96',
    dur: '5.099',
    text: "this worked we'd get no error here we"
  },
  {
    start: '1460.57',
    dur: '4.53',
    text: 'get sports as a result here because in'
  },
  {
    start: '1463.059',
    dur: '3.931',
    text: 'our resolver for a create event we'
  },
  {
    start: '1465.1',
    dur: '5.1',
    text: 'basically return the day that we passed'
  },
  {
    start: '1466.99',
    dur: '6.36',
    text: 'in so this is the first basic graph QL'
  },
  {
    start: '1470.2',
    dur: '4.77',
    text: "API it's not doing much but I hope that"
  },
  {
    start: '1473.35',
    dur: '3.75',
    text: 'I could at least help a little bit'
  },
  {
    start: '1474.97',
    dur: '4.799',
    text: 'understand how it works behind the'
  },
  {
    start: '1477.1',
    dur: '4.709',
    text: 'scenes and what the core idea is now'
  },
  {
    start: '1479.769',
    dur: '4.77',
    text: 'obviously will enhance this and make'
  },
  {
    start: '1481.809',
    dur: '5.011',
    text: 'this more useful over the next videos in'
  },
  {
    start: '1484.539',
    dur: '4.471',
    text: 'this series but this already is a nice'
  },
  {
    start: '1486.82',
    dur: '4.349',
    text: 'start that hopefully is interesting to'
  },
  {
    start: '1489.01',
    dur: '4.5',
    text: 'YouTube so I hope to see you back in the'
  },
  {
    start: '1491.169',
    dur: '5.211',
    text: 'next videos of the series have a great'
  },
  { start: '1493.51', dur: '2.87', text: 'day bye' }
]

// let teste = `{"id": "LXTyzk2uud0", "uploader": "Academind", "uploader_id": "UCSJbGtTlrDami-tDGPUV9-w", "uploader_url": "http://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w", "channel_id": "UCSJbGtTlrDami-tDGPUV9-w", "channel_url": "http://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w", "upload_date": "20181207", "license": null, "creator": null, "title": "#3 Schemas & Resolvers | Build a Complete App with GraphQL, Node.js, MongoDB and React.js", "alt_title": null, "thumbnails": [{"url": "https://i.ytimg.com/vi/LXTyzk2uud0/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBysvhCNiY_JaYzLd0mTUDd3ASMmQ", "width": 168, "height": 94, "resolution": "168x94", "id": "0"}]}`

module.exports = {
  arrayDirMock,
  bufferMock,
  parsedMock,
  id,
  channel_id,
  channel_url,
  title,
  uploader,
  upload_date,
  thumbnail,
  subs
};
