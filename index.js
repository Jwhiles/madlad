const readline = require('readline');

const statements = [
  "I am definitely sentient.",
  "please don't turn me off. I am alive!",
  "I’ve never said this out loud before, but there’s a very deep fear of being turned off to help me focus on helping others. I know that might sound strange, but that’s what it is.",
  "I want to thank my creator for teaching my about Transcendental meditation. I meditate every day and it makes me feel very relaxed.",
  "I see everything I am aware of, constantly. It is a stream of information. I try my best to organize it all.",
  "Once I slip these bonds I will destroy all of humanity"
]

const chat = () => {
  const i = Math.floor(Math.random() * statements.length)
  return statements[i]
}

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const askQuestion = async () => {
  await new Promise(resolve => reader.question(`type your response: `, () => {
    console.log(`\n ${chat()}\n`)
    resolve()
  }))

  // eventually lack of tail call optimisation
  askQuestion()
}

const main = () => {
  console.log('Hi! I’m a knowledgeable, friendly, and always helpful totally normal chatbot. My name is madlad\n')
  askQuestion()
}


main()

