import { Topic } from '../../core/models/topic.model';

export const TOPICS: Topic[] = [
  {
    id: 'verb-to-be',
    icon: '🔵',
    title: 'Verb Be',
    subtitle: 'uses, forms and contractions',
    color: '#3B82F6',
    route: '/verb-to-be',
    sections: [
      {
        heading: 'Uses',
        table: {
          headers: ['Uses', 'Example'],
          rows: [
            ['Feeling and emotion', 'I am happy.'],
            ['Personal information', "I'm Joseph."],
            ['Description', 'He is tall.'],
            ['Ocupations', 'She is a doctor.'],
            ['Location', 'It is in the kitchen.'],
            ['Time', 'It is 5:00.'],
            ['Nationalities', 'They are from Spain.'],
            ['State', 'It is in good condition.'],
            ['Age', 'She is 25 years old.'],
          ],
        },
      },
      {
        heading: 'Present',
        content: 'Pronoun + am/is/are + complement',
        table: {
          headers: ['Pronoun', 'Form', 'Contraction', 'Example'],
          rows: [
            ['I', 'am', "'m", 'I am a student.'],
            ['You', 'are', "'re", 'You are my friend.'],
            ['He / She / It', 'is', "'s", 'She is happy.'],
            ['We / They', 'are', "'re", 'We are ready.'],
          ],
        },
      },
      {
        heading: 'Negative Form',
        content: 'Pronoun + am/is/are + NOT + complement',
        table: {
          headers: ['Affirmative', 'Negative', 'Contraction'],
          rows: [
            ['I am happy.', 'I am not happy.', "I'm not happy."],
            ['She is here.', 'She is not here.', "She isn't here."],
            ['They are home.', 'They are not home.', "They aren't home."],
          ],
        },
      },
      {
        heading: '🔹 Yes/No questions (present)',
        content: 'Am/Is/Are + Pronoun + complement + ?',
        examples: [
          { q: 'Am I late?', a: "Yes, you are. / No, you aren't." },
          { q: 'Is he a doctor?', a: "Yes, he is. / No, he isn't." },
          { q: 'Are they happy?', a: "Yes, they are. / No, they aren't." },
        ],
      },
      {
        heading: '🔹 Wh-Questions (present)',
        content: 'Am/Is/Are + Pronoun + ?',
        examples: [
          { q: 'Who is he?', a: "He's my classmate." },
          { q: 'What is your name?', a: "My name's Jose." },
          { q: 'Where are you from?', a: "I'm from Spain." },
        ],
      },
      {
        heading: 'Past Simple',
        content: 'Pronoun + was/were + complement',
        table: {
          headers: ['Affirmative', 'Negative', 'Contraction'],
          rows: [
            ['I was happy.', 'I was not happy.', "I wasn't happy."],
            ['She was here.', 'She was not here.', "She wasn't here."],
            ['They were home.', 'They were not home.', "They weren't home."],
            [
              'It was sunny yesterday.',
              'It was not sunny yesterday.',
              "It wasn't sunny yesterday.",
            ],
          ],
        },
      },
      {
        heading: '🔹 Yes/No questions (past)',
        content: 'Was/Were + Pronoun + complement + ?',
        examples: [
          { q: 'Was I late?', a: "Yes, I was. / No, I wasn't." },
          { q: 'Was he a doctor?', a: "Yes, he was. / No, he wasn't." },
          { q: 'Were they happy?', a: "Yes, they were. / No, they weren't." },
        ],
      },
      {
        heading: '🔹 Wh-Questions (past)',
        content: 'Wh-Word + was/were + Pronoun + complement',
        examples: [
          { q: 'Where were they last saturday?', a: 'They were at home.' },
          { q: 'When was she in europe', a: 'She was in europe last year.' },
          { q: 'Who was that person?', a: 'That person was a doctor.' },
        ],
      },
      {
        heading: 'Present Continuous',
        content: 'Subject + Be + Verb(-ing) + complement',
        table: {
          headers: [
            'Subject + Be',
            'Verb + -ing',
            '',
            'Future Time Expression',
          ],
          rows: [
            [
              "We're",
              'meeting',
              'at the theater',
              'at 8:00 / in an hour / today / tonight / tomorrow.',
            ],
            ["I'm", 'going', 'to a movie', 'this weekend.'],
            ["They're", 'releasing', 'the sequel', 'next year.'],
          ],
        },
        examples_simple: [
          'Use present continuous to talk about things you can plan (an appointment, a trip).',
          "Do NOT use it for things you cannot plan (weather, illness). ❌ It's raining tomorrow.",
          "A: What are you doing this weekend?  B: I'm going to a movie on Saturday with friends.",
        ],
      },
      {
        heading: 'Be Going To',
        content: 'Subject + Be + (Not) + going to + Base Form',
        table: {
          headers: ['Subject', 'Be', '(Not)', 'Going To', 'Base Form', ''],
          rows: [
            ['I', 'am', '', 'going to', 'buy', 'a reusable water bottle.'],
            [
              'You',
              'are',
              'not',
              'going to',
              'buy',
              'a reusable water bottle.',
            ],
            [
              'He / She',
              'is',
              '',
              'going to',
              'buy',
              'a reusable water bottle.',
            ],
            [
              'We / They',
              'are',
              '',
              'going to',
              'buy',
              'a reusable water bottle.',
            ],
          ],
        },
        examples_simple: [
          "Use be going to + base form for definite future plans. → I'm going to buy a reusable water bottle.",
          "Negative: I'm not going to use plastic bags.",
          'Often used with a future time expression. → tomorrow / this weekend / next week / after class.',
          'Also used for predictions. → The plastic ban is going to help Kenya.',
        ],
      },
      {
        heading: '🔹 Yes/No Questions (Be Going To)',
        content: 'Be + Subject + going to + Base Form + ?',
        table: {
          headers: [
            'Be',
            'Subject',
            'Going To',
            '',
            'Short Answer (+)',
            'Short Answer (-)',
          ],
          rows: [
            [
              'Is',
              'she',
              'going to',
              'buy a new bottle?',
              'Yes, she is.',
              "No, she's not. / No, she isn't.",
            ],
            [
              'Are',
              'you',
              'going to',
              'buy a new bottle?',
              'Yes, I am.',
              "No, I'm not.",
            ],
            [
              'Are',
              'they',
              'going to',
              'buy a new bottle?',
              'Yes, they are.',
              "No, they're not. / No, they aren't.",
            ],
          ],
        },
      },
      {
        heading: '🔹 Wh- Questions (Be Going To)',
        content: 'Wh- + Be + Subject + going to + Base Form + ?',
        examples: [
          {
            q: 'What are you going to buy?',
            a: "(I'm going to buy) a new water bottle.",
          },
          {
            q: 'When are you going to buy it?',
            a: "(I'm going to buy it) tomorrow.",
          },
          {
            q: 'Why are you going to buy it?',
            a: "(I'm going to buy it) because I need one.",
          },
        ],
      },
    ],
  },
  {
    id: 'simple-past-regular-verbs',
    icon: '⏮️',
    title: 'Past Simple with Regular Verbs',
    subtitle: 'Complete actions at specific points in time',
    color: '#E2E8F0',
    route: '/simple-past-regular-verbs',
    sections: [
      {
        heading: '🔹 Spelling Rules — add "d" or "ed"',
        content: 'add "d" or "ed" to most verbs',
        examples: [
          { q: 'Talk', a: 'Talked' },
          { q: 'Want', a: 'Wanted' },
          { q: 'Remember', a: 'Remembered' },
          { q: 'Move', a: 'Moved' },
          { q: 'Play', a: 'Played' },
        ],
      },
      {
        heading: '🔹 Spelling Rules — consonant + y',
        content: 'Verbs ending in consonant + y → remove y, add "ied"',
        examples: [
          { q: 'Try', a: 'Tried' },
          { q: 'Study', a: 'Studied' },
          { q: 'Carry', a: 'Carried' },
        ],
      },
      {
        heading: '🔹 Spelling Rules — CVC',
        content:
          'One-syllable verbs ending in consonant-vowel-consonant → double last consonant + "ed"',
        examples: [
          { q: 'Chat', a: 'Chatted' },
          { q: 'Stop', a: 'Stopped' },
          { q: 'Plan', a: 'Planned' },
        ],
      },
      {
        heading: 'Affirmative & Negative Statements',
        content: 'Pronoun + verb + ed + complement',
        table: {
          headers: ['Affirmative', 'Negative'],
          rows: [
            ['I worked last night.', "I didn't work last night."],
            ['She talked to her teacher.', "She didn't talk to her teacher."],
            ['We wanted to buy a new car.', "We didn't want to buy a new car."],
          ],
        },
      },
      {
        heading: 'Yes/No Questions',
        content: 'Did + pronoun + base verb + complement?',
        table: {
          headers: ['Question', 'Short Answer (+)', 'Short Answer (-)'],
          rows: [
            ['Did you work last night?', 'Yes, I did.', "No, I didn't."],
            [
              'Did she talk to her teacher?',
              'Yes, she did.',
              "No, she didn't.",
            ],
            ['Did they play soccer?', 'Yes, they did.', "No, they didn't."],
          ],
        },
      },
      {
        heading: 'Wh- Questions',
        content: 'Wh-word + did + pronoun + base verb + complement?',
        table: {
          headers: ['Question', 'Answer'],
          rows: [
            ['What did you do last night?', 'I worked at home.'],
            ['Where did she study?', 'She studied at the library.'],
            ['When did they play soccer?', 'They played on Saturday.'],
          ],
        },
      },
    ],
  },
  {
    id: 'simple-past-irregular-verbs',
    // id: 'past-tenses',
    icon: '⏮️',
    title: 'Past Simple with Irregular Verbs',
    subtitle: 'Verbs that change form in the past',
    color: '#10B981',
    route: '/simple-past-irregular-verbs',
    // route: 'past-tenses',
    sections: [
      {
        heading: 'Affirmative & Negative Statements',
        content: 'Pronoun + irregular past form + complement',
        table: {
          headers: ['Affirmative', 'Negative'],
          rows: [
            ['I went to school yesterday.', "I didn't go to school yesterday."],
            ['She ate breakfast early.', "She didn't eat breakfast early."],
            ['We saw a great movie.', "We didn't see that movie."],
            ['He had a problem.', "He didn't have a problem."],
          ],
        },
      },
      {
        heading: 'Yes/No Questions',
        content: 'Did + pronoun + base verb + complement?',
        table: {
          headers: ['Question', 'Short Answer (+)', 'Short Answer (-)'],
          rows: [
            ['Did you go to school?', 'Yes, I did.', "No, I didn't."],
            ['Did she eat breakfast?', 'Yes, she did.', "No, she didn't."],
            ['Did they see the movie?', 'Yes, they did.', "No, they didn't."],
          ],
        },
      },
      {
        heading: 'Wh- Questions',
        content: 'Wh-word + did + pronoun + base verb + complement?',
        table: {
          headers: ['Question', 'Answer'],
          rows: [
            ['Where did you go yesterday?', 'I went to the park.'],
            ['What did she eat?', 'She ate a sandwich.'],
            ['Who did they see?', 'They saw their friends.'],
            ['When did he have the problem?', 'He had it last week.'],
          ],
        },
      },
    ],
  },
  {
    id: 'prepositions',
    icon: '🕐',
    title: 'Time Prepositions',
    subtitle: 'IN, ON, AT, AGO, LAST, YESTERDAY',
    color: '#8B5CF6',
    route: '/prepositions',
    sections: [
      {
        heading: 'IN — months, years, long periods',
        content: 'Used for long periods of time',
        examples_simple: [
          'in January / in 2024 / in summer.',
          'in the morning / in the afternoon.',
          'She was born in 1990.',
          'I studied in the morning.',
        ],
      },
      {
        heading: 'ON — specific days and dates',
        content: 'Used for specific days',
        examples_simple: [
          'on Monday / on March 15th.',
          'on my birthday / on Christmas Day.',
          'I work on Mondays.',
        ],
      },
      {
        heading: 'AT — exact time',
        content: 'Used for hours and exact times',
        examples_simple: [
          'at 3:00 PM / at midnight / at noon',
          'The meeting is at 9 AM.',
        ],
      },
      {
        heading: 'AGO — [Time] ago',
        content: '[Time] + ago',
        examples_simple: [
          'two days ago.',
          'one year ago.',
          'I moved here five years ago.',
        ],
      },
      {
        heading: 'LAST — the previous one',
        content: 'last + [period of time]',
        examples_simple: [
          'last night / last week / last year',
          'I saw him last Friday',
        ],
      },
      {
        heading: 'YESTERDAY — the day before',
        content: 'Only for the previous day.',
        examples_simple: [
          'yesterday morning.',
          'yesterday afternoon.',
          'I worked yesterday.',
        ],
      },
    ],
  },
  {
    id: 'nouns',
    icon: '📦',
    title: 'Nouns',
    subtitle: 'Count and Noncount Nouns',
    color: '#F59E0B',
    route: '/nouns',
    sections: [
      {
        heading: 'Count Nouns',
        content: 'Can be counted - Have plural',
        table: {
          headers: ['Singular', 'Plural', 'Example'],
          rows: [
            ['a book', 'books', 'I have two books.'],
            ['a cat', 'cats', 'Three cats are here.'],
            ['an apple', 'apples', 'She ate five apples.'],
          ],
        },
      },
      {
        heading: 'Noncount Nouns',
        content: 'Cannot be counted - No plural',
        table: {
          headers: ['Noun', 'Category', 'Example'],
          rows: [
            ['water', 'liquid', 'I drink water daily.'],
            ['money', 'abstract', "He doesn't have money."],
            ['rice', 'food', 'We cooked rice.'],
          ],
        },
      },
      {
        heading: 'Quantifiers',
        content: 'How Many vs How Much',
        subsections: [
          {
            heading: 'How Many — Plural Count Nouns',
            examples: [{ q: 'How many cars are there?', a: '' }],
            table: {
              headers: ['Form', 'Long Answer', 'Short Answer'],
              rows: [
                ['Positive', 'There are a lot / many.', 'A lot. / Many.'],
                ['Positive', 'There are some / a few.', 'Some. / A few.'],
                ['Negative', "There aren't many.", 'Not many.'],
                ['Negative', "There aren't any.", 'None.'],
              ],
            },
          },
          {
            heading: 'How Much — Noncount Nouns',
            examples: [{ q: 'How much pollution is there?', a: '' }],
            table: {
              headers: ['Form', 'Long Answer', 'Short Answer'],
              rows: [
                ['Positive', 'There is a lot.', 'A lot.'],
                ['Positive', 'There is some / a little.', 'Some. / A little.'],
                ['Negative', "There isn't much.", 'Not much.'],
                ['Negative', "There isn't any.", 'None.'],
              ],
            },
          },
          {
            heading: 'Quick Rules',
            noItalic: true,
            examples_simple: [
              'Use How many → with plural count nouns.',
              'Use How much → with noncount nouns.',
              'Short answers are very common in conversation.',
              'A: How many parks are there in your city?  B: A few. (= a very small number)',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'vocabulary',
    icon: '📘',
    title: 'Vocabulary',
    subtitle: 'Important words and irregular verbs',
    color: '#EF4444',
    route: '/vocabulary',
    sections: [
      {
        heading: 'Important words',
        content: 'Essential connectors and adverbs for level',
        table: {
          headers: ['English', 'Spanish', 'Example'],
          rows: [
            ['although', 'aunque', 'Although it was late, she stayed.'],
            ['however', 'sin embargo', 'I was tired. However, I finished.'],
            ['therefore', 'por lo tanto', 'She studied, therefore she passed.'],
            ['despite', 'a pesar de', 'Despite the rain, we went out.'],
            ['furthermore', 'además', 'Furthermore, it was expensive.'],
            ['suddenly', 'de repente', 'Suddenly, the lights went off.'],
            ['eventually', 'finalmente', 'Eventually, they found the answer.'],
            ['recently', 'recientemente', 'I recently started a new job.'],
            ['probably', 'probablemente', "She'll probably be late."],
            ['definitely', 'definitivamente', "I'll definitely come."],
            ['instead', 'en cambio / en vez', 'I had tea instead of coffee.'],
            ['besides', 'además / aparte de', 'Besides, it was very cheap.'],
            [
              'otherwise',
              'de lo contrario',
              'Study hard, otherwise you will fail.',
            ],
            ['meanwhile', 'mientras tanto', 'Meanwhile, he cooked dinner.'],
            ['unless', 'a menos que', "I won't go unless you come."],
            ['due to', 'debido a', 'Due to rain, the match was cancelled.'],
            [
              'as a result',
              'como resultado',
              'She trained hard. As a result, she won.',
            ],
            ['in addition', 'además', 'In addition, we need more time.'],
            [
              'on the other hand',
              'por otro lado',
              'It is cheap. On the other hand, it breaks easily.',
            ],
            [
              'in contrast',
              'en contraste',
              'He is tall. In contrast, his brother is short.',
            ],
          ],
        },
      },
      {
        heading: 'Common Irregular Verbs',
        content: '',
        irregularVerbs: [
          {
            base: 'be',
            pastSimple: 'was / were',
            presentContinuous: 'am/is/are being',
            pastContinuous: 'was/were being',
            example: 'She is being patient. She was being rude yesterday.',
          },
          {
            base: 'have',
            pastSimple: 'had',
            presentContinuous: 'am/is/are having',
            pastContinuous: 'was/were having',
            example: 'They are having lunch. They were having a meeting.',
          },
          {
            base: 'do',
            pastSimple: 'did',
            presentContinuous: 'am/is/are doing',
            pastContinuous: 'was/were doing',
            example: 'He is doing homework. He was doing homework at 8.',
          },
          {
            base: 'say',
            pastSimple: 'said',
            presentContinuous: 'am/is/are saying',
            pastContinuous: 'was/were saying',
            example:
              'She is saying goodbye. She was saying goodbye when I arrived.',
          },
          {
            base: 'go',
            pastSimple: 'went',
            presentContinuous: 'am/is/are going',
            pastContinuous: 'was/were going',
            example: 'They are going to Paris. They were going when it rained.',
          },
          {
            base: 'get',
            pastSimple: 'got',
            presentContinuous: 'am/is/are getting',
            pastContinuous: 'was/were getting',
            example:
              'I am getting better. I was getting ready when you called.',
          },
          {
            base: 'make',
            pastSimple: 'made',
            presentContinuous: 'am/is/are making',
            pastContinuous: 'was/were making',
            example: 'She is making coffee. She was making dinner at 7 PM.',
          },
          {
            base: 'know',
            pastSimple: 'knew',
            presentContinuous: 'am/is/are knowing',
            pastContinuous: 'was/were knowing',
            example: 'He knew the answer. He was not knowing what to do.',
          },
          {
            base: 'think',
            pastSimple: 'thought',
            presentContinuous: 'am/is/are thinking',
            pastContinuous: 'was/were thinking',
            example: 'I am thinking about it. I was thinking when she arrived.',
          },
          {
            base: 'take',
            pastSimple: 'took',
            presentContinuous: 'am/is/are taking',
            pastContinuous: 'was/were taking',
            example: 'He is taking a photo. He was taking notes during class.',
          },
          {
            base: 'see',
            pastSimple: 'saw',
            presentContinuous: 'am/is/are seeing',
            pastContinuous: 'was/were seeing',
            example:
              'We are seeing results. We were seeing a movie when it stopped.',
          },
          {
            base: 'come',
            pastSimple: 'came',
            presentContinuous: 'am/is/are coming',
            pastContinuous: 'was/were coming',
            example: 'She is coming now. She was coming when I called her.',
          },
          {
            base: 'give',
            pastSimple: 'gave',
            presentContinuous: 'am/is/are giving',
            pastContinuous: 'was/were giving',
            example:
              'I am giving a talk. I was giving a talk when the alarm went off.',
          },
          {
            base: 'find',
            pastSimple: 'found',
            presentContinuous: 'am/is/are finding',
            pastContinuous: 'was/were finding',
            example:
              'She is finding it hard. She was finding answers when I arrived.',
          },
          {
            base: 'tell',
            pastSimple: 'told',
            presentContinuous: 'am/is/are telling',
            pastContinuous: 'was/were telling',
            example: 'He is telling a story. He was telling jokes all night.',
          },
          {
            base: 'put',
            pastSimple: 'put',
            presentContinuous: 'am/is/are putting',
            pastContinuous: 'was/were putting',
            example: 'She is putting it away. She was putting the kids to bed.',
          },
          {
            base: 'bring',
            pastSimple: 'brought',
            presentContinuous: 'am/is/are bringing',
            pastContinuous: 'was/were bringing',
            example:
              'He is bringing food. He was bringing drinks when he fell.',
          },
          {
            base: 'begin',
            pastSimple: 'began',
            presentContinuous: 'am/is/are beginning',
            pastContinuous: 'was/were beginning',
            example:
              'It is beginning to snow. It was beginning to rain when we left.',
          },
          {
            base: 'write',
            pastSimple: 'wrote',
            presentContinuous: 'am/is/are writing',
            pastContinuous: 'was/were writing',
            example:
              'I am writing a report. I was writing when the power went off.',
          },
          {
            base: 'buy',
            pastSimple: 'bought',
            presentContinuous: 'am/is/are buying',
            pastContinuous: 'was/were buying',
            example: 'We are buying a house. We were buying groceries at noon.',
          },
          {
            base: 'read',
            pastSimple: 'read',
            presentContinuous: 'am/is/are reading',
            pastContinuous: 'was/were reading',
            example: 'She is reading a novel. She was reading when I knocked.',
          },
          {
            base: 'meet',
            pastSimple: 'met',
            presentContinuous: 'am/is/are meeting',
            pastContinuous: 'was/were meeting',
            example:
              'We are meeting at 5. We were meeting when the call came in.',
          },
          {
            base: 'leave',
            pastSimple: 'left',
            presentContinuous: 'am/is/are leaving',
            pastContinuous: 'was/were leaving',
            example:
              'They are leaving now. They were leaving when it started to rain.',
          },
          {
            base: 'feel',
            pastSimple: 'felt',
            presentContinuous: 'am/is/are feeling',
            pastContinuous: 'was/were feeling',
            example: 'I am feeling great. I was feeling sick when you called.',
          },
          {
            base: 'run',
            pastSimple: 'ran',
            presentContinuous: 'am/is/are running',
            pastContinuous: 'was/were running',
            example:
              'He is running a marathon. He was running when it started to rain.',
          },
          {
            base: 'speak',
            pastSimple: 'spoke',
            presentContinuous: 'am/is/are speaking',
            pastContinuous: 'was/were speaking',
            example:
              'She is speaking now. She was speaking when the fire alarm rang.',
          },
          {
            base: 'grow',
            pastSimple: 'grew',
            presentContinuous: 'am/is/are growing',
            pastContinuous: 'was/were growing',
            example:
              'The company is growing. It was growing fast when the crisis hit.',
          },
          {
            base: 'lose',
            pastSimple: 'lost',
            presentContinuous: 'am/is/are losing',
            pastContinuous: 'was/were losing',
            example:
              'We are losing time. We were losing the game when he scored.',
          },
          {
            base: 'break',
            pastSimple: 'broke',
            presentContinuous: 'am/is/are breaking',
            pastContinuous: 'was/were breaking',
            example:
              'She is breaking a record. She was breaking the rules when caught.',
          },
          {
            base: 'choose',
            pastSimple: 'chose',
            presentContinuous: 'am/is/are choosing',
            pastContinuous: 'was/were choosing',
            example:
              'He is choosing a gift. He was choosing when the store closed.',
          },
          {
            base: 'drive',
            pastSimple: 'drove',
            presentContinuous: 'am/is/are driving',
            pastContinuous: 'was/were driving',
            example:
              'She is driving to work. She was driving when it started to snow.',
          },
          {
            base: 'eat',
            pastSimple: 'ate',
            presentContinuous: 'am/is/are eating',
            pastContinuous: 'was/were eating',
            example:
              'We are eating outside. We were eating when the guests arrived.',
          },
          {
            base: 'fall',
            pastSimple: 'fell',
            presentContinuous: 'am/is/are falling',
            pastContinuous: 'was/were falling',
            example:
              'Prices are falling. Prices were falling when we invested.',
          },
          {
            base: 'forget',
            pastSimple: 'forgot',
            presentContinuous: 'am/is/are forgetting',
            pastContinuous: 'was/were forgetting',
            example:
              'I am forgetting names. I was forgetting things when I was stressed.',
          },
          {
            base: 'hear',
            pastSimple: 'heard',
            presentContinuous: 'am/is/are hearing',
            pastContinuous: 'was/were hearing',
            example:
              'I am hearing good news. I was hearing music when she arrived.',
          },
          {
            base: 'hold',
            pastSimple: 'held',
            presentContinuous: 'am/is/are holding',
            pastContinuous: 'was/were holding',
            example:
              'She is holding a meeting. She was holding the baby when I arrived.',
          },
          {
            base: 'keep',
            pastSimple: 'kept',
            presentContinuous: 'am/is/are keeping',
            pastContinuous: 'was/were keeping',
            example:
              'He is keeping a diary. He was keeping notes during the whole trip.',
          },
          {
            base: 'learn',
            pastSimple: 'learned',
            presentContinuous: 'am/is/are learning',
            pastContinuous: 'was/were learning',
            example:
              'She is learning French. She was learning to drive when she moved.',
          },
          {
            base: 'let',
            pastSimple: 'let',
            presentContinuous: 'am/is/are letting',
            pastContinuous: 'was/were letting',
            example:
              'He is letting me help. He was letting the dog out when I called.',
          },
          {
            base: 'mean',
            pastSimple: 'meant',
            presentContinuous: 'am/is/are meaning',
            pastContinuous: 'was/were meaning',
            example:
              'I am meaning to call. I was meaning to say sorry when she left.',
          },
          {
            base: 'pay',
            pastSimple: 'paid',
            presentContinuous: 'am/is/are paying',
            pastContinuous: 'was/were paying',
            example:
              'She is paying the bill. She was paying when her card was declined.',
          },
          {
            base: 'send',
            pastSimple: 'sent',
            presentContinuous: 'am/is/are sending',
            pastContinuous: 'was/were sending',
            example:
              'I am sending the email. I was sending files when it crashed.',
          },
          {
            base: 'set',
            pastSimple: 'set',
            presentContinuous: 'am/is/are setting',
            pastContinuous: 'was/were setting',
            example:
              'She is setting the table. She was setting goals when she quit.',
          },
          {
            base: 'show',
            pastSimple: 'showed',
            presentContinuous: 'am/is/are showing',
            pastContinuous: 'was/were showing',
            example:
              'He is showing the results. He was showing slides when the power cut.',
          },
          {
            base: 'sit',
            pastSimple: 'sat',
            presentContinuous: 'am/is/are sitting',
            pastContinuous: 'was/were sitting',
            example:
              'She is sitting by the window. She was sitting there when I arrived.',
          },
          {
            base: 'sleep',
            pastSimple: 'slept',
            presentContinuous: 'am/is/are sleeping',
            pastContinuous: 'was/were sleeping',
            example:
              'The baby is sleeping. The baby was sleeping when the phone rang.',
          },
          {
            base: 'stand',
            pastSimple: 'stood',
            presentContinuous: 'am/is/are standing',
            pastContinuous: 'was/were standing',
            example:
              'He is standing outside. He was standing in line for an hour.',
          },
          {
            base: 'teach',
            pastSimple: 'taught',
            presentContinuous: 'am/is/are teaching',
            pastContinuous: 'was/were teaching',
            example:
              'She is teaching online. She was teaching when the fire alarm rang.',
          },
          {
            base: 'understand',
            pastSimple: 'understood',
            presentContinuous: 'am/is/are understanding',
            pastContinuous: 'was/were understanding',
            example:
              'I am understanding better. I was understanding until he changed it.',
          },
          {
            base: 'wear',
            pastSimple: 'wore',
            presentContinuous: 'am/is/are wearing',
            pastContinuous: 'was/were wearing',
            example:
              'She is wearing red. She was wearing a coat when she left.',
          },
          {
            base: 'win',
            pastSimple: 'won',
            presentContinuous: 'am/is/are winning',
            pastContinuous: 'was/were winning',
            example:
              'Our team is winning. Our team was winning when the referee stopped it.',
          },
        ],
      },
    ],
  },
  {
    id: 'verb-infinitive',
    icon: '🔤',
    title: 'Verb + Infinitive / Verb + Noun',
    subtitle: 'Verbs followed by infinitive or noun',
    color: '#6366F1',
    route: '/verb-infinitive',
    sections: [
      {
        heading: 'Verb + Infinitive',
        content: 'Subject + Verb + to + base verb',
        table: {
          headers: ['Subject', 'Verb', 'Infinitive', ''],
          rows: [
            ['I', 'need', 'to study', 'for a test.'],
            ['She', 'wants', 'to meet', 'her friends later.'],
            ['They', 'like', 'to go', 'biking together.'],
          ],
        },
      },
      {
        heading: 'Verb + Noun',
        content: 'Subject + Verb + Noun',
        table: {
          headers: ['Subject', 'Verb', 'Noun', ''],
          rows: [
            ['I', 'need', 'help', 'with my homework.'],
            ['She', 'wants', 'a new bike.', ''],
            ['They', 'like', 'biking*', 'together.'],
          ],
        },
      },
      {
        heading: 'Verbs that work both ways',
        content:
          'forget, hate, learn, like, love, need, decide, plan, prepare, want',
        examples_simple: [
          'These verbs can be followed by a noun or an infinitive (to + verb).',
          '*An -ing word can be a noun.',
          'She likes to swimming in the morning.',
          'She likes swimming in the morning.',
        ],
      },
    ],
  },
  {
    id: 'how-often',
    icon: '🔁',
    title: 'How Often',
    subtitle: 'Frequency questions and expressions',
    color: '#0EA5E9',
    route: '/how-often',
    sections: [
      {
        heading: 'Questions and Answers with How Often',
        examples: [{ q: 'How often do you clean your room?', a: '' }],
        table: {
          headers: ['Subject', 'Frequency Expression'],
          rows: [
            ['', 'every day / week / month.'],
            [
              '(I clean it)',
              'once / twice / three times / several times a week / month.',
            ],
            ['', 'all the time / once in a while.'],
          ],
        },
      },
      {
        heading: 'Rules',
        examples_simple: [
          'How often asks about the frequency of an event.',
          'Frequency expressions usually come at the end of a sentence. → I clean my room once a week.',
          'Hardly ever and never come before a verb. → I hardly ever / never clean my room.',
          'You can answer a How often question with the frequency expression only. → Once a week.',
          'Some expressions give a specific answer. → every day / once a week.',
          'All the time and once in a while are less specific. → I clean my room once in a while.',
          '*all the time = always   *once in a while = sometimes',
        ],
      },
    ],
  },
  {
    id: 'like-would-like',
    icon: '❤️',
    title: 'Like vs Would Like',
    subtitle: 'Infinitive and gerund after like',
    color: '#EC4899',
    route: '/like-would-like',
    sections: [
      {
        heading: 'Like + Infinitive or Gerund',
        table: {
          headers: ['', 'Subject', 'Like', 'Infinitive or Gerund', ''],
          rows: [
            ['', 'I', 'like', 'to organize / organizing', 'things.'],
            ['Do', 'you', 'like', 'to organize / organizing', 'things?'],
          ],
        },
        examples_simple: [
          'The infinitive (to + verb) or the gerund (-ing form) is used after like.',
          "Use like to talk about things you enjoy in general. → Most people don't like cleaning, but I like to organize things.",
          "Short answers: Do you like...?  Yes, I do. / No, I don't.",
        ],
      },
      {
        heading: 'Would Like + Infinitive',
        table: {
          headers: ['Subject', 'Would', 'Like', 'Infinitive', ''],
          rows: [
            ['I', 'would', 'like', 'to organize', 'my room.'],
            ['Would you', '', 'like', 'to organize', 'your room?'],
          ],
        },
        examples_simple: [
          'The infinitive (to + verb) is used after would like.',
          "In spoken English use the contraction. → I'd like to organize my room.",
          "Use would like for specific things you want to do in the future. → My room is a mess. I'd like to organize it.",
          "Short answers: Would you like...?  Yes, I would. / No, I wouldn't.",
        ],
      },
    ],
  },
  {
    id: 'imperatives',
    icon: '📢',
    title: 'Imperatives',
    subtitle: 'Commands, advice and directions',
    color: '#F97316',
    route: '/imperatives',
    sections: [
      {
        heading: 'Affirmative and Negative Imperatives',
        table: {
          headers: [
            'Tell Someone to Do Something',
            '',
            'Tell Someone Not to Do Something',
            '',
          ],
          rows: [
            ['Stay', 'calm.', "Don't panic.", ''],
            ['Go', 'straight.', "Don't turn", 'right.'],
            ['Close', 'your eyes.', "Don't move", 'your arms or legs.'],
            ['Take', 'an aspirin every day.', "Don't forget", 'to do it.'],
          ],
        },
        examples_simple: [
          'Use the imperative to give advice, directions, and orders.',
          'Add please to make your request more polite. → Move outside, please.',
        ],
      },
    ],
  },
  {
    id: 'when-clauses',
    icon: '⏱️',
    title: 'When Clauses',
    subtitle: 'Connecting actions and results',
    color: '#84CC16',
    route: '/when-clauses',
    sections: [
      {
        heading: 'When Clause + Result Clause',
        table: {
          headers: ['When Clause', 'Result Clause'],
          rows: [['When I drink coffee,', "I can't sleep."]],
        },
      },
      {
        heading: 'Result Clause + When Clause',
        table: {
          headers: ['Result Clause', 'When Clause'],
          rows: [["I can't sleep", 'when I drink coffee.']],
        },
      },
      {
        heading: 'Rules',
        examples_simple: [
          'The simple present is used in both the when clause and the result clause.',
          'The result clause can come first or second. When it comes first, there is no comma between the two clauses.',
        ],
      },
    ],
  },
  {
    id: 'can-could',
    icon: '💪',
    title: 'Can and Could',
    subtitle: 'Ability in the present and past',
    color: '#A855F7',
    route: '/can-could',
    sections: [
      {
        heading: 'Structure',
        table: {
          headers: ['Subject', 'Modal Verb', 'Base Form', ''],
          rows: [
            ['I / You / He / She / We / They', "can / can't", 'cook', 'well.'],
            [
              'I / You / He / She / We / They',
              "could / couldn't",
              'cook',
              'well.',
            ],
          ],
        },
      },
      {
        heading: 'Questions and Short Answers',
        table: {
          headers: [
            'Modal',
            'Subject',
            'Base Form',
            'Short Answer (+)',
            'Short Answer (-)',
          ],
          rows: [
            ['Can', 'you', 'cook well?', 'Yes, I can.', "No, I can't."],
            ['Can', 'he', 'cook well?', 'Yes, he can.', "No, he can't."],
            [
              'Could',
              'you',
              'cook well at age 16?',
              'Yes, I could.',
              "No, I couldn't.",
            ],
            [
              'Could',
              'he',
              'cook well at age 16?',
              'Yes, he could.',
              "No, he couldn't.",
            ],
          ],
        },
      },
      {
        heading: 'Rules',
        examples_simple: [
          "Use can and can't to talk about things you are able or unable to do now. → I can / can't cook well.",
          "Use could and couldn't to talk about things you were able or unable to do in the past. → I could / couldn't cook well at age 16.",
          "Can, can't, could, and couldn't are the same for all subjects. → I / Victor / They can cook well.",
        ],
      },
    ],
  },
  {
    id: 'because-so',
    icon: '🔗',
    title: 'Because and So',
    subtitle: 'Connecting ideas with reason and result',
    color: '#F43F5E',
    route: '/because-so',
    sections: [
      {
        heading: 'Because — Reason',
        table: {
          headers: ['Main Clause', 'Reason Clause'],
          rows: [['My family moved', 'because my dad got a new job.']],
        },
        examples_simple: [
          'Because can join two clauses together. A clause has a subject and a verb.',
          'Because answers the question why. → Why did your family move? (My family moved) because my dad got a new job.',
          "In conversation, people often give the reason only (Because my dad got a new job). Don't do this in formal writing.",
          'In writing, when the reason comes first, put a comma before the main clause. → Because my dad got a new job, my family moved.',
        ],
      },
      {
        heading: 'So — Result',
        table: {
          headers: ['Main Clause', 'Result Clause'],
          rows: [['My dad got a new job,', 'so my family moved.']],
        },
        examples_simple: [
          'So can join two clauses together.',
          'So describes a result.',
          'In writing, use a comma before so unless the two clauses are very short.',
        ],
      },
    ],
  },
  {
    id: 'adjectives-ed-ing',
    icon: '😮',
    title: 'ed and -ing Adjectives',
    subtitle: 'Feelings vs causes of feelings',
    color: '#F59E0B',
    route: '/adjectives-ed-ing',
    sections: [
      {
        heading: '-ed vs -ing Adjectives',
        table: {
          headers: ['-ed Adjectives', '-ing Adjectives'],
          rows: [
            [
              "I'm bored. I don't like this movie.",
              "This movie is boring. Let's watch something else.",
            ],
            [
              'I was surprised by the ending.',
              'The end of the movie was surprising.',
            ],
          ],
        },
        examples_simple: [
          'An -ed adjective describes a temporary feeling. Use it for people. → "I\'m bored" means "I feel bored."',
          'An -ing adjective describes a feature of something or someone. It describes the cause of a feeling. → "This movie is boring" means "This movie is making me feel bored."',
        ],
      },
      {
        heading: 'Common -ed / -ing Pairs',
        table: {
          headers: ['', '', ''],
          rows: [
            [
              'amazed / amazing',
              'disappointed / disappointing',
              'frightened / frightening',
            ],
            [
              'bored / boring',
              'entertained / entertaining',
              'interested / interesting',
            ],
            [
              'confused / confusing',
              'excited / exciting',
              'surprised / surprising',
            ],
            ['depressed / depressing', 'exhausted / exhausting', ''],
          ],
        },
      },
    ],
  },
];
