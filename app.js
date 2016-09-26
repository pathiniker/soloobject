var wild = {
  teamName: 'Minnesota Wild',
  sport: 'hockey',
  league: 'National Hockey League (NHL)',
  dateFounded: '1997',
  hometown: 'St Paul, MN',
  arena: 'Xcel Energy Center',
  conference: 'Western',
  division: 'Central',
  headCoach: 'Bruce Boudreau',
  captain: 'Mikko Koivu',
  cups: 0


}

document.write('<p>'+'The ' + wild.teamName + ' are a professional ' + wild.sport + ' team in the ' + wild.league + ', founded in ' + wild.dateFounded + '. Their hometown is '
+ wild.hometown + " at the " + wild.arena + '.' + ' They play in the ' + wild.conference + ' conference, in the ' + wild.division
+ ' division. Their head coach is ' + wild.headCoach + ', and their team captain is ' + wild.captain + '. Despite being in the league since ' + wild.dateFounded
+ ', they have won ' + wild.cups + ' Stanley Cups.'+'</p>')


console.log('The ' + wild.teamName + ' are a professional ' + wild.sport + ' team in the ' + wild.league + ', founded in ' + wild.dateFounded + '. Their hometown is '
+ wild.hometown + " at the " + wild.arena + '.' + ' They play in the ' + wild.conference + ' conference, in the ' + wild.division
+ ' division. Their head coach is ' + wild.headCoach + ', and their team captain is ' + wild.captain + '. Despite being in the league since ' + wild.dateFounded
+ ', they have won ' + wild.cups + ' Stanley Cups.');
