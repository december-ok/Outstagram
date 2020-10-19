import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true
  }
)

const db = mongoose.connection

const handleOpen = () => {
  console.log('✅ Connected to DB')
}
const handleError = (error) => {
  console.log(`❌ Error on DB Connection:${error}`)
}

db.on('error', handleError)
db.once('open', handleOpen)

export const posts = [
  {
    id: 1,
    author: 'messi',
    authorImage: './contents/user.png',
    contentsType: 0,
    // 0 is pictures, 1 is video
    contentFiles: [
      './contents/messi.jpg'
    ],
    article: 'The Argentina captain submitted a transfer request on Tuesday, meaning a Nou Camp career spanning 16 years and featuring 634 goals as well as 34 trophies could be at an end. There have been countless incredible achievements and landmarks along the way, leading to a record six Ballons dOr.Earlier this summer, BBC Sport picked what we thought were his 10 most iconic moments for Barcelona and Argentina and asked you to rank them.Here they are from one to 10 as decided by you.You know hes not bad when scoring four against a Premier League team only makes it in at number nine...',
    likedUsers: [

    ],
    comments: [

    ]
  },
  {
    id: 2,
    author: 'pique',
    authorImage: './contents/user.png',
    contentsType: 0,
    // 0 is pictures, 1 is video
    contentFiles: [
      './contents/pique.jpg'
    ],
    article: "Barcelona's Spain defender Gerard Pique has confirmed his retirement from international football. The 31-year-old centre-back made 102 appearances for his country between 2009 and 2018, scoring five times. He was part of the Spain team that won their first World Cup in 2010, before adding the 2012 European Championship. His appearances were often greeted with jeers and whistles by Spanish fans, partly because of his support for Catalonia's independence referendum.",
    likedUsers: [

    ],
    comments: [

    ]
  },
  {
    id: 3,
    author: 'nalgangdo',
    authorImage: './contents/user.png',
    contentsType: 0,
    // 0 is pictures, 1 is video
    contentFiles: [
      './contents/naldo.jpg'
    ],
    article: '가장 큰 논란이자 이번 사건의 중심적인 논란이라고 할 수 있으며 알려진 바로 크리스티아누 호날두는 계약 상 최소 45분은 뛰어야 했는데, 위에서 언급했다시피 경기 출전을 이유로 사인회에 불참했더니 정작 필드에서 뛰지도 않았다. 처음에는 선발 출장 명단에서 제외되고 전반전에 나오지 않아서 후반전에는 교체 출전되어 뛸 것으로 보였었다. 경기장 입장 후 전반전 벤치에 있는 호날두의 모습이 중계 카메라에 나올 때마다 관중들의 환호성이 나왔었다. 허나 후반전에 들어서도 교체 출전은커녕 몸을 푸는 모습조차 없었다. 결국 카메라에 호날두가 잡힐 때마다 들리던 관중들의 환호성은 야유로 바뀌었다. 70분경에 곤살로 이과인이 교체될 때는 이과인의 이름이 외쳐지지 않고 호날두를 부르는 외침만 들리는 정도였다. 그러나 호날두는 벤치에만 앉은 채 경기만 지켜보고 있었고, 결국 끝까지 출전하지 않았다. 결국 경기 막바지엔 관중석에서 메시를 연호하는 상황이 벌어졌고, 이에 호날두는 인상을 찌푸리며 경기장을 떠났다. 공교롭게도 메시와 이과인 둘 다 아르헨티나 선수이다.',
    likedUsers: [

    ],
    comments: [

    ]
  }
]

export const users = [
  {
    id: 1,
    name: 'hihi',
    userImage: './contents/user.png'
  }
]
