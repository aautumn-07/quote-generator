const quotes = [
    {
        text: "The only true wisdom is in knowing you know nothing.",
        author: "Socrates",
        category: "Wisdom"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
        category: "Life"
    },
    {
        text: "The two most important days in your life are the day you are born and the day you find out why.",
        author: "Mark Twain",
        category: "Purpose"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
        category: "Success"
    },
    {
        text: "Where there is love there is life.",
        author: "Mahatma Gandhi",
        category: "Love"
    },
    {
        text: "Until you make the unconscious conscious, it will direct your life and you will call it fate.",
        author: "Carl Jung",
        category: "Psychology"
    },
    {
        text: "A leader is one who knows the way, goes the way, and shows the way.",
        author: "John C. Maxwell",
        category: "Leadership"
    },
    {
        text: "Character is like a tree and reputation like its shadow.",
        author: "Abraham Lincoln",
        category: "Character"
    },
    {
        text: "Discipline is the bridge between goals and accomplishment.",
        author: "Jim Rohn",
        category: "Discipline"
    },
    {
        text: "Faith is taking the first step even when you don't see the whole staircase.",
        author: "Martin Luther King Jr.",
        category: "Faith"
    },
    {
        text: "Hope is being able to see that there is light despite all of the darkness.",
        author: "Desmond Tutu",
        category: "Hope"
    },
    {
        text: "Knowledge is power.",
        author: "Francis Bacon",
        category: "Knowledge"
    },
    {
        text: "Science is a way of thinking much more than it is a body of knowledge.",
        author: "Carl Sagan",
        category: "Science"
    },
    {
        text: "You have power over your mind, not outside events. Realize this, and you will find strength.",
        author: "Marcus Aurelius",
        category: "Stoicism"
    },
    {
        text: "Whether you think you can, or you think you can't, you're right.",
        author: "Henry Ford",
        category: "Mindset"
    },
    {
        text: "Our greatest glory is not in never falling, but in rising every time we fall.",
        author: "Confucius",
        category: "Growth"
    },
    {
        text: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas Edison",
        category: "Failure"
    },
    {
        text: "I learned that courage was not the absence of fear, but the triumph over it.",
        author: "Nelson Mandela",
        category: "Courage"
    },
    {
        text: "Education is the most powerful weapon which you can use to change the world.",
        author: "Nelson Mandela",
        category: "Education"
    },
    {
        text: "A real friend is one who walks in when the rest of the world walks out.",
        author: "Walter Winchell",
        category: "Friendship"
    },
    {
        text: "Lost time is never found again.",
        author: "Benjamin Franklin",
        category: "Time"
    },
    {
        text: "Happiness depends upon ourselves.",
        author: "Aristotle",
        category: "Happiness"
    },
    {
        text: "Patience is bitter, but its fruit is sweet.",
        author: "Aristotle",
        category: "Patience"
    },
    {
        text: "The unexamined life is not worth living.",
        author: "Socrates",
        category: "Reflection"
    },
    {
        text: "The truth will set you free.",
        author: "Jesus Christ (John 8:32)",
        category: "Truth"
    },
    {
        text: "You can't use up creativity. The more you use, the more you have.",
        author: "Maya Angelou",
        category: "Creativity"
    },
    {
        text: "Freedom is not worth having if it does not include the freedom to make mistakes.",
        author: "Mahatma Gandhi",
        category: "Freedom"
    },
    {
        text: "He who knows others is wise; he who knows himself is enlightened.",
        author: "Lao Tzu",
        category: "Self Discovery"
    },
    {
        text: "Talk is cheap. Show me the code.",
        author: "Linus Torvalds",
        category: "Code"
    },
    {
        text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler",
        category: "Code"
    },
    {
        text: "Make it work, make it right, make it fast.",
        author: "Kent Beck",
        category: "Code"
    },
    {
        text: "Premature optimization is the root of all evil.",
        author: "Donald Knuth",
        category: "Code"
    },
    {
        text: "First, solve the problem. Then, write the code.",
        author: "John Johnson",
        category: "Code"
    },
    {
        text: "Everyone knows that debugging is twice as hard as writing a program in the first place.",
        author: "Brian Kernighan",
        category: "Code"
    },
    {
        text: "The best way to predict the future is to invent it.",
        author: "Alan Kay",
        category: "Code"
    },
    {
        text: "Simple is better than complex.",
        author: "Tim Peters",
        category: "Python"
    },
    {
        text: "There should be one, and preferably only one, obvious way to do it.",
        author: "Tim Peters",
        category: "Python"
    },
    {
        text: "Java is C++ without the guns, knives, and clubs.",
        author: "James Gosling",
        category: "Java"
    },
    {
        text: "Write once, run anywhere.",
        author: "Sun Microsystems (Java slogan)",
        category: "Java"
    },
    {
        text: "In God we trust. All others must bring data.",
        author: "W. Edwards Deming",
        category: "Database"
    },
    {
        text: "Data is the new oil.",
        author: "Clive Humby",
        category: "Database"
    },
    {
        text: "C is quirky, flawed, and an enormous success.",
        author: "Dennis Ritchie",
        category: "C"
    },
    {
        text: "JavaScript is the world's most misunderstood programming language.",
        author: "Douglas Crockford",
        category: "JavaScript"
    },
    {
        text: "Write programs that do one thing and do it well.",
        author: "Doug McIlroy",
        category: "Unix/Tools"
    },
    {
        text: "Software is a great combination between artistry and engineering.",
        author: "Bill Gates",
        category: "Software"
    }
];