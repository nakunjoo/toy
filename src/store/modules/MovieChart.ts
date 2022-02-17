import { Module, GetterTree, MutationTree, ActionTree, ActionContext } from 'vuex';
import { MovieChartBeScreen } from '@/types/MainInterface'

export class Movie {
  public movie_list:Array<MovieChartBeScreen> = [
    {
        movie_img: '../assets/movie_img/movie_main_0.jpg',
        audience: '12',
        release_date: new Date('2022-02-09'),
        special_hall: ['imax'],
        title: '듄',
        golden_egg: 'great',
        golden_egg_value: '92%',
        reservation_rate: '18.7%',
        re_opening: true,
        foreman: ['드니 빌뇌브'],
        produce:  [],
        actor: [
          '티모시 샬라메' ,  '레베카 퍼거슨' ,  '오스카 아이삭' ,  '제이슨 모모아' ,  '조슈 브롤린' ,  '젠데이아 콜먼' ,  '하비에르 바르뎀' ,  '스텔란 스카스가드' ,  '장첸' ,  '샤론 던컨 브루스터' ,  '데이브 바티스타' ,  '데이빗 다스트말치안'],
        genre: ['SF'],
        runing_time: 155,
        country: ['미국', '캐나다', '헝가리'],
        detail_title: '“듄을 지배하는 자가 우주를 지배한다!”',
        detail_content:'10191년, 아트레이데스 가문의 후계자인 폴(티모시 샬라메)은 시공을 초월한 존재이자\n전 우주를 구원할 예지된 자의 운명을 타고났다.\n그리고 어떤 계시처럼 매일 꿈에서 아라키스 행성에 있는 한 여인을 만난다.\n모래언덕을 뜻하는 \'듄\'이라 불리는 아라키스는 물 한 방울 없는 사막이지만\n우주에서 가장 비싼 물질인 신성한 환각제 스파이스의 유일한 생산지로 이를 차지하기 위한 전쟁이 치열하다.\n 황제의 명령으로 폴과 아트레이데스 가문은 죽음이 기다리는 아라키스로 향하는데…\n\n위대한 자는 부름에 응답한다, 두려움에 맞서라, 이것은 위대한 시작이다!'
    },
    {
        movie_img: '../assets/movie_img/movie_main_1.jpg',
        audience: '12',
        release_date: new Date('2022-02-09'),
        special_hall: ['imax', 'forDX'],
        title: '해적-도깨비 깃발',
        golden_egg: 'good',
        golden_egg_value: '80%',
        reservation_rate: '15.5%',
        re_opening: false,
        foreman: ['김정훈'],
        produce:  ['송용운'],
        actor: ['강하늘' ,  '한효주' ,  '이광수' ,  '권상우' ,  '채수빈' ,  '오세훈' ,  '김성오' ,  '박지환'],
        genre: ['어드벤처', '액션', '코미디'],
        runing_time: 125,
        country: ['한국'],
        detail_title: '“가자, 보물 찾으러!”',
        detail_content:'자칭 고려 제일검인 의적단 두목 ‘무치’(강하늘)와\n바다를 평정한 해적선의 주인 ‘해랑’(한효주).\n한 배에서 운명을 함께하게 된 이들이지만\n산과 바다, 태생부터 상극으로 사사건건 부딪히며 바람 잘 날 없는 항해를 이어간다.\n\n\n그러던 어느 날, 왜구선을 소탕하던 이들은\n흔적도 없이 사라진 왕실의 보물이 어딘가 숨겨져 있다는 사실을 알게 되고\n해적 인생에 다시없을 최대 규모의 보물을 찾아 위험천만한 모험에 나서기 시작한다.\n\n\n하지만 사라진 보물을 노리는 건 이들뿐만이 아니었으니!\n원하는 것을 얻기 위해 수단과 방법을 가리지 않는 역적 ‘부흥수’(권상우) 또한\n보물을 차지하기 위해 바다에 뛰어드는데...! '
    },
    {
        movie_img: '../assets/movie_img/movie_main_2.jpg',
        audience: 'all',
        release_date: new Date('2022-02-17'),
        special_hall: ['forDX'],
        title: '해리 포터와 불사조 기사단',
        golden_egg: 'Preegg',
        golden_egg_value: '98%',
        reservation_rate: '13.9%',
        re_opening: true,
        foreman: ['데이빗 예이츠'],
        produce:  [''],
        actor: [
          '다니엘 래드클리프' ,  '엠마 왓슨' ,  '루퍼트 그린트'],
        genre: ['환타지', '액션', '어드벤처'],
        runing_time: 137,
        country: ['미국', '영국'],
        detail_title: '호그와트 최대 위기! 볼드모트 그가 돌아왔다!\n어둠의 세력에 빠진 호그와트를 구하기 위해 해리포터와 불사조 기사단, 그들이 손을 잡았다!',
        detail_content:'호그와트 마법학교에서 5번째 해를 맞이하게 된 해리포터(다니엘 래드클리프). 헤르미온느(엠마 왓슨)와 론(루퍼트 그린트)과의 관계도 소원하고 예언자 일보는 해리에 대해 악의적인 소문을 퍼뜨려 해리를 곤경에 빠뜨린다. 초챙(케이티 렁)과의 로맨스도 힘에 겹다. 게다가 마법부는 볼드모트(랄프 파인즈)가 돌아왔다는 이야기를 애써 모른 체 하려 하고 오히려 호그와트 교장 덤블도어가 헛소문을 퍼트려 마법부의 권위를 실추시킨다며 비난한다. 여기에 마법부 장관 코넬리우스 퍼지는 새로운 어둠의 방어술 교수 자리에 자신의 심복 돌로레스 엄브리지를 임명해 덤블도어와 학생들을 감시하게 한다. 형편없는 그의 수업은 어둠의 마법에 대한 학생들의 방어능력을 한심한 수준으로 격하시킨다.\n\n\n이제 해리포터는 호그와트로 다시 돌아온 악의 세력 볼드모트에 대항하기 위해 만들어진 마법사들의 비밀단체 불사조기사단과 함께 볼드모트와 죽음의 대결은 준비한다.\n그 와중에 해리는 소중한 사람의 죽음까지 맞이하는 아픔을 겪게 되는데…\n\n\n위기에 빠진 호그와트!\n해리포터와 불사조 기사단, 모든 것이 그들 손에 달렸다!!'
    },
    {
        movie_img: '../assets/movie_img/movie_main_3.jpg',
        audience: '15',
        release_date: new Date('2022-02-24'),
        special_hall: ['forDX'],
        title: '극장판 주술회전 0',
        golden_egg: 'Preegg',
        golden_egg_value: '99%',
        reservation_rate: '11.8%',
        re_opening: false,
        foreman: ['박성후'],
        produce:  [''],
        actor: ['오가타 메구미' ,  '하나자와 카나' ,  '코마츠 미카코' ,  '우치야마 코우키' ,  '세키 토모카즈' ,  '나카무라 유이치' ,  '사쿠라이 타카히로'],
        genre: ['애니메이션'],
        runing_time: 105,
        country: ['일본'],
        detail_title: '',
        detail_content:'어릴 적 소꿉친구인 오리모토 리카를 교통사고로 눈앞에서 잃은 옷코츠 유타.\n\n\n“약속해, 리카와 유타는 어른이 되면 결혼하기로”\n옷코츠는 원령으로 변한 리카의 저주에 괴로워한 나머지, 자신도 죽기를 바라지만 최강의 주술사인 고죠 사토루에 의해 주술고전에 들어가게 된다. 그리고 동급생인 젠인마키, 이누마키 토게, 판다를 만나면서 굳은 결심을 한다.\n\n\n“살아도 된다는 자신감이 필요해”\n“나는 주술고전에서 리카의 저주를 풀겠습니다”\n한편, 옷코츠와 친구들 앞에 과거에 일반인을 대량으로 학살해서 고전에서 추방된 최악의 주저사인 게토 스구루가 나타난다.\n\n\n“12월 24일, 우리는 백귀야행을 결행한다”\n주술사만의 낙원을 만들려는 게토는 비술사를 섬멸하겠다면서, 신주쿠와 교토에 천의 저주를 내리는데…과연 옷코츠는 게토를 막을 수 있을까? 그리고리카의 저주를 풀 수 있을까?'
    },
    {
        movie_img: '../assets/movie_img/movie_main_4.jpg',
        audience: '12',
        release_date: new Date('2022-02-16'),
        special_hall: ['imax'],
        title: '덩케르크',
        golden_egg: 'Preegg',
        golden_egg_value: '99%',
        reservation_rate: '9.4%',
        re_opening: false,
        foreman: ['크리스토퍼 놀란'],
        produce:  [''],
        actor: [
          '톰 하디' ,  '마크 라이런스' ,  '케네스 브래너' ,  '킬리언 머피' ,  '핀 화이트헤드' ,  '아뉴린 바나드' ,  '해리 스타일스' ,  '제임스 다시' ,  '잭 로던' ,  '배리 케오간' ,  '톰 글린 카니'],
        genre: ['액션', '드라마', '스릴러', '전쟁'],
        runing_time: 106,
        country: ['미국', '영국', '프랑스'],
        detail_title: '',
        detail_content:'"우린 끝까지 싸울 것이다"\n살아남는 것이 승리다!\n\n\n해변: 보이지 않는 적에게 포위된 채 어디서 총알이 날아올지 모르는 위기의 일주일\n바다: 군인들의 탈출을 돕기 위해 배를 몰고 덩케르크로 항해하는 하루\n하늘: 적의 전투기를 공격해 추락시키는 임무,  남은 연료로 비행이 가능한 한 시간\n\n\n“우리는 해변에서 싸울 것이다. 우리는 상륙지에서 싸울 것이다.\n우리는 들판에서 싸우고 시가에서도 싸울 것이다. 우리는 끝까지 싸울 것이다”'
    },
    {
        movie_img: '../assets/movie_img/movie_main_5.jpg',
        audience: '12',
        release_date: new Date('2022-02-20'),
        special_hall: [],
        title: '나일 강의 죽음',
        golden_egg: 'Preegg',
        golden_egg_value: '99%',
        reservation_rate: '7.1%',
        re_opening: false,
        foreman: ['케네스 브래너'],
        produce:  [''],
        actor: [
          '케네스 브래너' ,  '갤 가돗' ,  '레티티아 라이트' ,  '톰 베이트먼' ,  '에마 매키' ,  '아네트 베닝'],
        genre: ['범죄', '드라마', '미스터리'],
        runing_time: 127,
        country: ['미국'],
        detail_title: '',
        detail_content:'영화 <나일 강의 죽음>은 신혼부부를 태운 이집트 나일 강의 초호화 여객선에서 살인 사건이 벌어진 가운데, 탐정 ‘에르큘 포와로’가 조사에 착수 하지만 연이은 살인 사건으로 탑승객 모두가 충격과 혼란에 휩싸이게 되는 이야기'
    },
    {
        movie_img: '../assets/movie_img/movie_main_6.jpg',
        audience: '15',
        release_date: new Date('2022-02-09'),
        special_hall: [],
        title: '킹메이커',
        golden_egg: 'great',
        golden_egg_value: '91%',
        reservation_rate: '6.1%',
        re_opening: false,
        foreman: ['변성현'],
        produce:  ['박준호'],
        actor: ['설경구', '이선균', '유재명', '조우진'],
        genre: ['드라마'],
        runing_time: 123,
        country: ['한국'],
        detail_title: '세상 바뀌는 꼴 좀 보고 싶습니다',
        detail_content:'세상을 바꾸기 위해 도전하는 정치인 ‘김운범’ 앞에\n그와 뜻을 함께하고자 선거 전략가 ‘서창대’가 찾아온다.\n\n\n열세인 상황 속에서 서창대는 아무도 상상하지 못한 선거 전략을 펼치고\n‘김운범’은 선거에 연이어 승리하며, 당을 대표하는 대통령 후보까지 올라서게 된다.\n\n\n대통령 선거를 향한 본격적인 행보가 시작되고 그들은 당선을 위해 총력을 기울인다.\n\n\n그러던 중 ‘김운범’ 자택에 폭발물이 터지는 사건이 발생하고\n용의자로 ‘서창대’가 지목되면서 둘의 관계는 새로운 국면을 맞이하게 되는데...'
    },
    {
        movie_img: '../assets/movie_img/movie_main_7.jpg',
        audience: '12',
        release_date: new Date('2022-02-09'),
        special_hall: [],
        title: '스파이더맨-노 웨이 홈',
        golden_egg: 'great',
        golden_egg_value: '95%',
        reservation_rate: '3.8%',
        re_opening: false,
        foreman: ['존 왓츠'],
        produce:  [''],
        actor: [
          '톰 홀랜드' ,  '젠데이아 콜먼' ,  '베네딕트 컴버배치' ,  '존 파브로' ,  '제이콥 배덜런' ,  '마리사 토메이' ,  '알프리드 몰리나'],
        genre: ['액션', '어드벤처', 'SF'],
        runing_time: 148,
        country: ['미국'],
        detail_title: '',
        detail_content:'영화 <스파이더맨: 노 웨이 홈>은 정체가 탄로난 스파이더맨 \'피터 파커\'(톰 홀랜드)가 문제를 해결하기 위해 \'닥터 스트레인지\'(베네딕트 컴버배치)의 도움을 받던 중 뜻하지 않게 멀티버스가 열리게 되고,\n이를 통해 \'닥터 옥토퍼스\'(알프리드 몰리나) 등 각기 다른 차원의 숙적들이 나타나며 사상 최악의 위기를 맞게 되는 이야기를 그린 마블 액션 블록버스터.'
    },
    {
        movie_img: '../assets/movie_img/movie_main_8.jpg',
        audience: 'all',
        release_date: new Date('2022-02-09'),
        special_hall: [],
        title: '씽2게더',
        golden_egg: 'great',
        golden_egg_value: '98%',
        reservation_rate: '2.3%',
        re_opening: false,
        foreman: ['가스 제닝스'],
        produce:  [''],
        actor: ['매튜 맥커너히' ,  '리즈 위더스푼' ,  '스칼렛 요한슨' ,  '태런 에저튼' ,  '토리 켈리' ,  '할시' ,  '퍼렐 윌리엄스' ,  '보노'],
        genre: ['애니메이션'],
        runing_time: 109,
        country: ['미국'],
        detail_title: '전 세계가 주목한 스테이지! 함께 도전할 준비됐지?',
        detail_content:'대국민 오디션 이후 각자의 자리에서 꿈을 이루고 있는 버스터 문(매튜 맥커너히)과 크루들에게\n레드 쇼어 시티에서 전 세계가 주목하는 사상 최고의 쇼가 펼쳐진다는 소식이 들려오고\n버스터 문과 크루들은 도전에 나선다.\n\n\n그러나 최고의 스테이지에 서기 위한 경쟁은 이전과는 비교도 할 수 없을 만큼 치열하고,\n버스터 문은 완벽한 라이브를 위해 종적을 감춘 레전드 뮤지션 클레이(보노)를 캐스팅하겠다는 파격 선언을 하는데!'
    },
    {
        movie_img: '../assets/movie_img/movie_main_9.jpg',
        audience: '12',
        release_date: new Date('2022-02-17'),
        special_hall: ['imax'],
        title: '비틀즈 겟 백-루프탑 콘서트',
        golden_egg: 'Preegg',
        golden_egg_value: '99%',
        reservation_rate: '2.1%',
        re_opening: false,
        foreman: ['피터 잭슨'],
        produce:  [''],
        actor: [ 
          '존 레논' ,  '폴 매카트니' ,  '조지 해리슨' ,  '링고 스타'],
        genre: ['다큐멘터리'],
        runing_time: 65,
        country: ['미국'],
        detail_title: '',
        detail_content: '전설적인 밴드 ‘비틀즈’의 멤버\n존 레논, 폴 매카트니, 조지 해리슨, 링고 스타의 이야기와\n그들의 마지막 라이브 공연인 런던의 옥상 콘서트를 최초로 담고 있는 다큐멘터리 영화',
    },
  ]
}

const getters: GetterTree<Movie, any> = {
  movie_list(state: Movie): Array<MovieChartBeScreen> {
    return state.movie_list
  }
}

const mutations: MutationTree<Movie> = {
  SET_MOVIE(state: Movie, data: Array<MovieChartBeScreen>) {
    state.movie_list = data
  }
}

const actions: ActionTree<Movie, any> = {
  set_movie(state: ActionContext<Movie, any>, data: Array<MovieChartBeScreen>) {
    console.log(data)
    state.commit('SET_MOVIE', data)
  }
}

const MovieChart: Module<Movie, any> = {
  namespaced: true,
  state: new Movie(),
  getters,
  mutations,
  actions,
}

export default MovieChart