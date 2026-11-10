'use strict';

/* ============================================================
   重邮新生导引 · 南山第一程
   可驾驶的低多边形校园。内容依据 2026 级新生报到清单整理，
   具体流程、地点与时间以学校官方通知为准。
   ============================================================ */

/* ---------- 站点内容 ---------- */

const STOPS = [
  {
    id: 'baodao', order: 1, name: '报到大厅', zone: '学院迎新点',
    short: '交验材料、领材料袋与校园卡', kind: 'hall',
    t: 0.14, side: 1,
    intro: '从校门进来，第一件事不是跑完所有流程，而是先找到学院的迎新点。把材料交出去，后面的事就有了顺序。',
    steps: [
      '<strong>网上预报到</strong>：登录学校迎新系统，核对个人信息、登记到校方式；需要的话申请绿色通道或完成兵役登记。',
      '<strong>到校报到</strong>：到所属学院迎新点交验录取通知书和身份证，领取材料袋与校园卡。',
      '<strong>绿色通道</strong>：家庭经济困难的新生可现场办理缓缴学费、咨询助学贷款，不影响注册入学。',
      '<strong>随身材料</strong>：录取通知书、身份证原件和 3 份复印件、户口迁移证或户口本复印件、党团组织关系材料、一寸两寸证件照各 6 张、困难证明、一类账户银行卡。',
      '把辅导员电话写在纸上，和证件放在一起——手机没电时，这张纸比手机靠谱。'
    ],
    note: '报到时间、地点与材料以学校最新迎新通知为准。'
  },
  {
    id: 'sushe', order: 2, name: '宿舍区', zone: '宿舍楼栋',
    short: '入住、报修、一周内的事', kind: 'dorm',
    t: 0.27, side: -1,
    intro: '先把睡觉、洗澡、洗衣这些小事安顿好，校园就会开始像家。报到当天下午，凭校园卡或凭证到楼栋办理入住。',
    steps: [
      '到宿舍楼栋凭校园卡或凭证办理入住，领取钥匙或激活门禁，确认床位与公共设施。',
      '检查门锁、水电和家具，发现损坏先拍照，向宿管报修，别自己拆。',
      '购买电器前先看宿舍管理规定，功率和种类都有限制。',
      '一周内登录一网通办 <strong>i.cqupt.edu.cn</strong>，修改初始密码并绑定手机号。',
      '按学院安排参加入学体检，随后进入军训（约 2–3 周），留意连队通知与作息。',
      '记住后勤报修电话 <strong>62461000 / 62461241</strong>，24 小时可用。'
    ],
    note: '宿舍安排、入住时间与门禁方式以学院和宿管通知为准。'
  },
  {
    id: 'yikatong', order: 3, name: '一卡通中心', zone: '新行政楼 B103',
    short: '激活、充值、挂失补卡', kind: 'card',
    t: 0.40, side: 1,
    intro: '校园卡是你在这所学校的另一张身份证：吃饭、洗澡、借书、门禁都用它。先让它能用，再谈别的。',
    steps: [
      '首次在食堂圈存机或微信、支付宝绑定充值后即可使用，同时修改初始密码。',
      '充值时先小额试刷，确认余额和扣费正常。',
      '卡丢了先挂失，再按流程补办，别拖到吃饭时才发现。',
      '挂失、补卡找一卡通中心：<strong>023-62461943</strong>，新行政楼负一楼 <strong>B103</strong>。',
      '校园卡、门禁和图书借阅可能绑定同一张卡，开通时一并确认。'
    ],
    note: '办理时间、所需材料与费用以学校最新通知为准。'
  },
  {
    id: 'jiaoxue', order: 4, name: '教学区', zone: '教务与课表',
    short: '课表、培养方案、选课', kind: 'teaching',
    t: 0.53, side: -1,
    intro: '选课不是抢座位，是先看懂自己的培养方案。第一周上课前，把教室先走一遍，比在群里问十次都管用。',
    steps: [
      '登录教务系统，确认课表与教室，把第一周的上课地点先走一遍。',
      '找到本专业培养方案，分清必修、选修和学分要求。',
      '阅读本学期选课通知，注意选课轮次和截止时间。',
      '把课程、教学周和上课地点记进课表，别只存在群聊截图里。',
      '遇到课程冲突或看不懂的条款，整理成具体问题问辅导员或教务老师。'
    ],
    note: '课程、选课时间与培养方案以教务系统最新信息为准。'
  },
  {
    id: 'yiyuan', order: 5, name: '校医院', zone: '校内西侧 · 近西校门',
    short: '体检、医保、急诊电话', kind: 'hospital',
    t: 0.66, side: 1,
    intro: '身体不舒服时，知道门在哪比硬扛更重要。入学体检和医保参保，都在这周办完。',
    steps: [
      '按学院安排参加入学体检，带好校园卡和身份证。',
      '登录「重庆税务」公众号办理城乡居民医保参保。',
      '记住校医院急诊 24 小时电话 <strong>023-62460120</strong>，位置在校内西侧、近西校门。',
      '就诊先挂号再就诊，不清楚流程就问导诊台；需要转诊或报销时，保留病历、发票和费用清单。',
      '突发情况先拨打急救电话，再联系辅导员。'
    ],
    note: '门诊时间、体检安排与医保政策以校医院和学校通知为准。'
  },
  {
    id: 'kuaidi', order: 6, name: '快递站', zone: '崇文路 2 号',
    short: '收货地址、取件、验货', kind: 'express',
    t: 0.79, side: -1,
    intro: '开学季的快递会比你先到。先把收货地址写对，再找到取件点，能省掉很多来回。',
    steps: [
      '收货地址写全：<strong>重庆市南岸区崇文路 2 号 重庆邮电大学 ×× 栋 / 学院</strong>。',
      '下单时写到宿舍楼栋，别只写学校名。',
      '到校后先找到快递站或智能柜的位置和营业时间。',
      '取件带好取件码和身份证明，代取先问清规则。',
      '开学季排队久，错峰去；大件或贵重物品当面验货。'
    ],
    note: '各快递公司取件点不同，以短信和站点通知为准。'
  },
  {
    id: 'shitang', order: 7, name: '食堂', zone: '后勤服务',
    short: '圈存、错峰、第一顿饭', kind: 'canteen',
    t: 0.92, side: 1,
    intro: '第一顿饭不用攻略，先找到离宿舍最近的那个窗口。吃顺口了，南山就开始变得具体。',
    steps: [
      '先确认食堂位置和营业时段，早餐和夜宵时间可能不同。',
      '校园卡充值后先小额试刷，确认余额和扣费正常。',
      '高峰时段错峰，或先看一圈再排队。',
      '有忌口或过敏，点餐前直接问窗口工作人员。',
      '记住一两个合口味的窗口，比一次吃遍所有更实用。'
    ],
    note: '食堂开放时间与支付方式以学校后勤通知为准。'
  }
];

const EXTRA = {
  id: 'chufaqian', order: 0, extra: true, name: '出发前', zone: '随身材料',
  short: '录取通知书、证件、照片、银行卡', kind: 'hall',
  intro: '报到那天手忙脚乱，多半是材料没放在一起。出发前按这张单子装袋，到校就能少翻一次包。',
  steps: [
    '<strong>录取通知书</strong>：报到交验、领取材料袋；迁户口也要带。',
    '<strong>身份证原件 + 3 份复印件</strong>：报到、领卡、办证都要用。',
    '<strong>户口迁移证</strong>：非重庆籍带迁移证；重庆籍带户口本复印件。',
    '<strong>党 / 团组织关系材料</strong>：党员带介绍信，团员备好智慧团建信息。',
    '<strong>证件照</strong>：一寸、两寸各备 6 张，体检、办证、社团都可能用。',
    '<strong>家庭经济困难证明</strong>：申请绿色通道、助学金时用。',
    '<strong>银行卡（1 类账户）</strong>：奖助学金、助学贷款余额发放用。',
    '纸上记下辅导员电话：手机没电或没网时，这张纸比手机靠谱。'
  ],
  note: '清单依据公开迎新资料整理，具体材料以录取通知书和学校通知为准。'
};

const ALL_CARDS = STOPS.concat(EXTRA);

const START_T = 0.02;
const GATE_T = 0.05;
const END_T = 0.985;
const ACADEMIC_URL = 'https://jwzx.cqupt.edu.cn/indexold.php';
const STORE_KEY = 'cqupt-drive-opened-v1';

/* ---------- 小工具 ---------- */

const $ = (s, root = document) => root.querySelector(s);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
const pad2 = n => String(n).padStart(2, '0');

function readStore(key, fallback) {
  try {
    const v = JSON.parse(localStorage.getItem(key));
    return v == null ? fallback : v;
  } catch { return fallback; }
}
function saveStore(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* 忽略隐私模式 */ }
}

/* ---------- 状态 ---------- */

const savedOpened = readStore(STORE_KEY, []);
const opened = new Set(
  (Array.isArray(savedOpened) ? savedOpened : []).filter(id => STOPS.some(s => s.id === id))
);
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window || window.innerWidth < 700;

let scene, camera, renderer;
let car, carGroup, frontWheels = [], carLight;
let route;
let driving = true;
let panelOpen = false;
let listOpen = false;
let endingOpen = false;
let endingTriggered = false;
let endingTimer = 0;
let endingRemaining = 3;
let endingRing = null;
let endingPortal = null;
let nearStop = null;
let currentStop = null;
let lastFocus = null;
let toastTimer = 0;
let hintTimer = 0;

const carState = {
  position: new THREE.Vector3(),
  heading: 0,
  speed: 0,
  steer: 0,
  wheelSpin: 0
};
const keys = new Set();
const joy = { x: 0, y: 0, active: false };
const colliders = [];
const markerNodes = [];
const mapMarkers = new Map();
let mapCarEl = null;
let mapEndEl = null;
const gatePos = new THREE.Vector3();
const endPos = new THREE.Vector3();

/* ---------- 场景启动 ---------- */

function boot() {
  const canvas = $('#stage');
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  } catch (err) {
    showFallback();
    return;
  }
  if (!renderer || !renderer.getContext()) {
    showFallback();
    return;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.toneMappingExposure = 0.92;
  renderer.domElement.tabIndex = 0;

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xcfe3cd, 120, 420);
  const initialAspect = window.innerWidth / window.innerHeight;
  camera = new THREE.PerspectiveCamera(initialAspect < 0.8 ? 66 : 52, initialAspect, 0.1, 900);

  buildSky();
  buildLights();
  buildRoute();
  buildTerrain();
  buildRoad();
  buildTrees();
  buildLamps();
  buildGate();
  buildLandmark();
  buildEnding();

  STOPS.forEach(buildStop);
  buildMinimap();

  buildCar();

  bindUI();
  bindInput();
  buildList();
  updateProgress();

  const initialHash = location.hash;
  const hashStop = ALL_CARDS.find(s => initialHash === '#stop-' + s.id);
  const params = new URLSearchParams(location.search);
  const atParam = parseFloat(params.get('at'));
  let spawnAt = START_T;
  if (Number.isFinite(atParam)) spawnAt = clamp(atParam, 0.01, 0.98);
  else if (hashStop && !hashStop.extra) spawnAt = hashStop.t;

  resetCar(true, spawnAt);

  if (hashStop) openStop(hashStop);
  else if (initialHash === '#list') openList(true);
  else if (initialHash === '#ending') {
    placeCarAt(END_T);
    snapCamera();
    showEnding();
  }

  window.addEventListener('resize', onResize);

  renderer.setAnimationLoop(tick);

  setTimeout(() => {
    $('#loader').classList.add('done');
    hintTimer = setTimeout(() => $('#drive-hint').classList.add('gone'), 9000);
  }, reducedMotion ? 0 : 650);
}

function showFallback() {
  const stage = $('#stage');
  if (stage) stage.style.display = 'none';
  document.body.classList.add('no-webgl');
  const loader = $('#loader');
  if (loader) loader.classList.add('done');
  const hint = $('#drive-hint');
  if (hint) hint.classList.add('gone');
  if (!$('#card-grid').children.length) buildList();
  bindUI();
  updateProgress();
  openList(true);
  toast('这个浏览器暂时无法启动 3D 校园，先看清单吧');
}

/* ---------- 天空 / 光 ---------- */

function buildSky() {
  const c = document.createElement('canvas');
  c.width = 16; c.height = 512;
  const ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, 512);
  g.addColorStop(0, '#4f9fd6');
  g.addColorStop(0.36, '#77bee5');
  g.addColorStop(0.58, '#b9dfef');
  g.addColorStop(0.74, '#f4e7c6');
  g.addColorStop(0.87, '#ffe9b5');
  g.addColorStop(1, '#fff4d6');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 16, 512);
  const tex = new THREE.CanvasTexture(c);
  tex.encoding = THREE.sRGBEncoding;
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(520, 32, 24),
    new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, fog: false, depthWrite: false })
  );
  scene.add(sky);

  // 落日
  const sc = document.createElement('canvas');
  sc.width = sc.height = 256;
  const sctx = sc.getContext('2d');
  const sg = sctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  sg.addColorStop(0, 'rgba(255,252,235,1)');
  sg.addColorStop(0.2, 'rgba(255,244,200,.95)');
  sg.addColorStop(0.5, 'rgba(255,225,150,.32)');
  sg.addColorStop(1, 'rgba(255,218,140,0)');
  sctx.fillStyle = sg;
  sctx.fillRect(0, 0, 256, 256);
  const sunTex = new THREE.CanvasTexture(sc);
  sunTex.encoding = THREE.sRGBEncoding;
  const sun = new THREE.Sprite(new THREE.SpriteMaterial({
    map: sunTex, transparent: true, depthWrite: false, depthTest: false,
    blending: THREE.AdditiveBlending, fog: false
  }));
  sun.position.set(100, 112, -320);
  sun.scale.set(84, 84, 1);
  sun.renderOrder = -1;
  scene.add(sun);

  // 云
  const cloudCanvas = document.createElement('canvas');
  cloudCanvas.width = 256;
  cloudCanvas.height = 128;
  const cc = cloudCanvas.getContext('2d');
  for (let i = 0; i < 16; i++) {
    const x = 36 + Math.random() * 184;
    const y = 48 + Math.random() * 38;
    const r = 16 + Math.random() * 28;
    const cg = cc.createRadialGradient(x, y, 0, x, y, r);
    cg.addColorStop(0, 'rgba(255,255,255,.92)');
    cg.addColorStop(0.6, 'rgba(255,255,255,.55)');
    cg.addColorStop(1, 'rgba(255,255,255,0)');
    cc.fillStyle = cg;
    cc.beginPath();
    cc.arc(x, y, r, 0, Math.PI * 2);
    cc.fill();
  }
  const cloudTex = new THREE.CanvasTexture(cloudCanvas);
  cloudTex.encoding = THREE.sRGBEncoding;
  const cloudMat = new THREE.SpriteMaterial({
    map: cloudTex, transparent: true, opacity: 0.62, depthWrite: false, fog: false
  });
  const cloudSpecs = [
    [-160, 96, -320, 120, 58],
    [70, 124, -360, 168, 82],
    [250, 82, -300, 104, 50],
    [-40, 146, -390, 188, 92],
    [190, 152, -410, 150, 74]
  ];
  for (const [x, y, z, w, h] of cloudSpecs) {
    const cloud = new THREE.Sprite(cloudMat);
    cloud.position.set(x, y, z);
    cloud.scale.set(w, h, 1);
    scene.add(cloud);
  }
}

function buildLights() {
  scene.add(new THREE.HemisphereLight(0xeaf6ff, 0x6f8f55, 0.6));
  const key = new THREE.DirectionalLight(0xfff2cf, 0.75);
  key.position.set(70, 120, 60);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xbfe4ff, 0.12);
  fill.position.set(-60, 50, -80);
  scene.add(fill);
  scene.add(new THREE.AmbientLight(0xdfeee0, 0.08));
}

/* ---------- 路线 / 地形 ---------- */

function buildRoute() {
  route = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 145),
    new THREE.Vector3(4, 0, 110),
    new THREE.Vector3(-6, 0, 75),
    new THREE.Vector3(-10, 0, 38),
    new THREE.Vector3(2, 0, 2),
    new THREE.Vector3(16, 0, -34),
    new THREE.Vector3(12, 0, -72),
    new THREE.Vector3(2, 0, -108),
    new THREE.Vector3(-4, 0, -138)
  ], false, 'catmullrom', 0.42);
}

function terrainY(x, z) {
  const edge = Math.max(0, Math.abs(x) - 27);
  const zEdge = Math.max(0, Math.abs(z) - 132);
  const f = smoothstep(0, 18, edge);
  const hills = Math.sin(x * 0.052 + 1.1) * Math.cos(z * 0.041) * 1.7
    + Math.sin(z * 0.1 + x * 0.03) * 0.6;
  return edge * edge * 0.011 + zEdge * zEdge * 0.02 + hills * f;
}

function buildTerrain() {
  const geo = new THREE.PlaneGeometry(340, 420, 108, 132);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const colors = [];
  const base = new THREE.Color(0x3f7a38);
  const mid = new THREE.Color(0x4e8c42);
  const high = new THREE.Color(0x63a052);
  let seed = 9157;
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const y = terrainY(x, z);
    pos.setY(i, y);
    const t = clamp(y / 20, 0, 1);
    const c = base.clone().lerp(mid, t).lerp(high, t * t);
    c.offsetHSL((rnd() - 0.5) * 0.02, (rnd() - 0.5) * 0.06, (rnd() - 0.5) * 0.06);
    colors.push(c.r, c.g, c.b);
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
  const ground = new THREE.Mesh(geo, mat);
  ground.receiveShadow = false;
  scene.add(ground);
}

/* ---------- 道路 ---------- */

function roadSide(t, side, dist) {
  const tt = clamp(t, 0, 1);
  const p = route.getPointAt(tt);
  const tan = route.getTangentAt(tt).normalize();
  const n = new THREE.Vector3(-tan.z, 0, tan.x).normalize();
  const pos = p.clone().addScaledVector(n, side * dist);
  const front = n.clone().multiplyScalar(-side);
  return { pos, tan, n, rot: Math.atan2(front.x, front.z) };
}

function sideStripGeometry(curve, inner, outer, y, segments) {
  const positions = [], indices = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const p = curve.getPointAt(t);
    const tan = curve.getTangentAt(t).normalize();
    const nx = -tan.z, nz = tan.x;
    positions.push(p.x + nx * inner, y, p.z + nz * inner);
    positions.push(p.x + nx * outer, y, p.z + nz * outer);
    if (i < segments) {
      const a = i * 2, b = a + 1, c = a + 2, d = a + 3;
      indices.push(a, c, b, b, c, d);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  g.setIndex(indices);
  g.computeVertexNormals();
  return g;
}

function ribbonGeometry(curve, halfWidth, y, segments, uvScale) {
  const positions = [], uvs = [], indices = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const p = curve.getPointAt(t);
    const tan = curve.getTangentAt(t).normalize();
    const nx = -tan.z, nz = tan.x;
    positions.push(p.x + nx * halfWidth, y, p.z + nz * halfWidth);
    positions.push(p.x - nx * halfWidth, y, p.z - nz * halfWidth);
    uvs.push(0, t * uvScale, 1, t * uvScale);
    if (i < segments) {
      const a = i * 2, b = a + 1, c = a + 2, d = a + 3;
      indices.push(a, c, b, b, c, d);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  g.setIndex(indices);
  g.computeVertexNormals();
  return g;
}

function buildRoad() {
  const roadCanvas = document.createElement('canvas');
  roadCanvas.width = 128;
  roadCanvas.height = 256;
  const rc = roadCanvas.getContext('2d');
  rc.fillStyle = '#3b3e44';
  rc.fillRect(0, 0, 128, 256);
  for (let i = 0; i < 420; i++) {
    rc.fillStyle = `rgba(255,255,255,${Math.random() * 0.035})`;
    rc.fillRect(Math.random() * 128, Math.random() * 256, 1.4, 1.4);
  }
  rc.fillStyle = 'rgba(255,247,226,.78)';
  rc.fillRect(61, 18, 6, 76);
  rc.fillRect(61, 148, 6, 76);
  rc.fillStyle = 'rgba(255,250,235,.2)';
  rc.fillRect(9, 0, 2, 256);
  rc.fillRect(117, 0, 2, 256);
  const tex = new THREE.CanvasTexture(roadCanvas);
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.encoding = THREE.sRGBEncoding;
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();

  const roadMat = new THREE.MeshLambertMaterial({
    map: tex, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2
  });
  const road = new THREE.Mesh(ribbonGeometry(route, 5.6, 0.07, 420, 22), roadMat);
  scene.add(road);

  // 两侧的人行道与路缘
  const walkMat = new THREE.MeshLambertMaterial({ color: 0x7f986f });
  scene.add(new THREE.Mesh(ribbonGeometry(route, 8.4, 0.05, 420, 1), walkMat));
  const curbMat = new THREE.MeshBasicMaterial({ color: 0xf2e8cf, transparent: true, opacity: 0.55, side: THREE.DoubleSide });
  scene.add(new THREE.Mesh(sideStripGeometry(route, 5.62, 5.94, 0.095, 420), curbMat));
  scene.add(new THREE.Mesh(sideStripGeometry(route, -5.94, -5.62, 0.095, 420), curbMat));
  const edgeMat = new THREE.MeshBasicMaterial({ color: 0xf2e8cf, transparent: true, opacity: 0.22, side: THREE.DoubleSide });
  scene.add(new THREE.Mesh(sideStripGeometry(route, 8.32, 8.46, 0.06, 420), edgeMat));
  scene.add(new THREE.Mesh(sideStripGeometry(route, -8.46, -8.32, 0.06, 420), edgeMat));
}

/* ---------- 树 / 石 / 路灯 ---------- */

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
}

function nearAnyStop(x, z, r) {
  for (const s of markerNodes) {
    const dx = x - s.position.x, dz = z - s.position.z;
    if (dx * dx + dz * dz < r * r) return true;
  }
  return false;
}

function buildTrees() {
  const rnd = seededRandom(20260910);
  const cone = new THREE.ConeGeometry(1.5, 4.9, 6);
  cone.translate(0, 2.45, 0);
  const matA = new THREE.MeshLambertMaterial({ color: 0x2f6b35, flatShading: true });
  const matB = new THREE.MeshLambertMaterial({ color: 0x3b7a3e, flatShading: true });
  const countA = 130, countB = 110;
  const treesA = new THREE.InstancedMesh(cone, matA, countA);
  const treesB = new THREE.InstancedMesh(cone, matB, countB);
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  const v = new THREE.Vector3();
  const sc = new THREE.Vector3();

  function fill(mesh, count, minX) {
    let i = 0, guard = 0;
    while (i < count && guard < count * 40) {
      guard++;
      const x = (rnd() * 2 - 1) * (minX + rnd() * 46);
      const z = (rnd() * 2 - 1) * 142;
      if (Math.abs(x) < 30) continue;
      if (nearAnyStop(x, z, 12)) continue;
      const y = terrainY(x, z);
      if (y > 24) continue;
      const s = 0.7 + rnd() * 0.95;
      e.set(0, rnd() * Math.PI * 2, 0);
      q.setFromEuler(e);
      v.set(x, y, z);
      sc.set(s, s * (0.85 + rnd() * 0.4), s);
      m.compose(v, q, sc);
      mesh.setMatrixAt(i, m);
      i++;
    }
    mesh.count = i;
    mesh.instanceMatrix.needsUpdate = true;
    scene.add(mesh);
  }
  fill(treesA, countA, 30);
  fill(treesB, countB, 36);

  const rockGeo = new THREE.DodecahedronGeometry(1.1, 0);
  const rockMat = new THREE.MeshLambertMaterial({ color: 0x8a9a80, flatShading: true });
  const rocks = new THREE.InstancedMesh(rockGeo, rockMat, 46);
  let ri = 0, guard = 0;
  while (ri < 46 && guard < 800) {
    guard++;
    const x = (rnd() * 2 - 1) * 74;
    const z = (rnd() * 2 - 1) * 138;
    if (Math.abs(x) < 24) continue;
    if (nearAnyStop(x, z, 10)) continue;
    const y = terrainY(x, z);
    const s = 0.5 + rnd() * 1.3;
    e.set(rnd() * 0.4, rnd() * Math.PI * 2, rnd() * 0.3);
    q.setFromEuler(e);
    v.set(x, y + s * 0.3, z);
    sc.set(s, s * 0.7, s);
    m.compose(v, q, sc);
    rocks.setMatrixAt(ri, m);
    ri++;
  }
  rocks.count = ri;
  rocks.instanceMatrix.needsUpdate = true;
  scene.add(rocks);

  // 路边的低矮灌木，打散大片空草地
  const bushGeo = new THREE.IcosahedronGeometry(0.82, 0);
  const bushMat = new THREE.MeshLambertMaterial({ color: 0x3f7d40, flatShading: true });
  const bushes = new THREE.InstancedMesh(bushGeo, bushMat, 80);
  let bi = 0;
  for (let i = 0; i < 80; i++) {
    const t = 0.035 + rnd() * 0.93;
    if (STOPS.some(s => Math.abs(s.t - t) < 0.028)) continue;
    const side = rnd() < 0.5 ? -1 : 1;
    const at = roadSide(t, side, 10.4 + rnd() * 3.4);
    const s = 0.55 + rnd() * 0.8;
    e.set(0, rnd() * Math.PI * 2, 0);
    q.setFromEuler(e);
    v.set(at.pos.x, terrainY(at.pos.x, at.pos.z) + s * 0.26, at.pos.z);
    sc.set(s, s * 0.72, s);
    m.compose(v, q, sc);
    bushes.setMatrixAt(bi++, m);
  }
  bushes.count = bi;
  bushes.instanceMatrix.needsUpdate = true;
  scene.add(bushes);

  // 路边的野花，给晴天一点颜色
  const flowerGeo = new THREE.SphereGeometry(0.1, 4, 3);
  const yellow = new THREE.InstancedMesh(flowerGeo, new THREE.MeshBasicMaterial({ color: 0xffd76a }), 80);
  const white = new THREE.InstancedMesh(flowerGeo, new THREE.MeshBasicMaterial({ color: 0xfffdf2 }), 80);
  let yc = 0, wc = 0;
  for (let i = 0; i < 160; i++) {
    const t = 0.05 + rnd() * 0.9;
    if (STOPS.some(s => Math.abs(s.t - t) < 0.025)) continue;
    const side = rnd() < 0.5 ? -1 : 1;
    const at = roadSide(t, side, 10.4 + rnd() * 4.2);
    const s = 0.6 + rnd() * 1.1;
    e.set(0, rnd() * Math.PI * 2, 0);
    q.setFromEuler(e);
    v.set(at.pos.x, terrainY(at.pos.x, at.pos.z) + 0.12, at.pos.z);
    sc.set(s, s * 0.7, s);
    m.compose(v, q, sc);
    if (rnd() < 0.55 && yc < 80) yellow.setMatrixAt(yc++, m);
    else if (wc < 80) white.setMatrixAt(wc++, m);
  }
  yellow.count = yc;
  white.count = wc;
  yellow.instanceMatrix.needsUpdate = true;
  white.instanceMatrix.needsUpdate = true;
  scene.add(yellow, white);
}

function buildLamps() {
  const poleGeo = new THREE.CylinderGeometry(0.09, 0.12, 5.1, 6);
  const poleMat = new THREE.MeshLambertMaterial({ color: 0x6b7f6a });
  const bulbGeo = new THREE.SphereGeometry(0.3, 8, 6);
  const bulbMat = new THREE.MeshBasicMaterial({ color: 0xf1ead4, fog: false });

  for (let i = 0; i < 11; i++) {
    const t = 0.075 + i * 0.085;
    if (t > 0.96) break;
    for (const side of [-1, 1]) {
      if (STOPS.some(s => Math.abs(s.t - t) < 0.018)) continue;
      const at = roadSide(t, side, 9.6);
      const pole = new THREE.Mesh(poleGeo, poleMat);
      pole.position.set(at.pos.x, 2.55, at.pos.z);
      scene.add(pole);
      const bulb = new THREE.Mesh(bulbGeo, bulbMat);
      bulb.position.set(at.pos.x, 5.15, at.pos.z);
      scene.add(bulb);
    }
  }
}

/* ---------- 建筑 ---------- */

const BUILD_CFG = {
  hall: { w: 15, h: 8.4, d: 12, color: 0xe5d8bf, roof: 'flat', roofColor: 0x3c4a3e, rows: 2, cols: 5, accent: true, canopy: true },
  dorm: { w: 12.5, h: 13, d: 9, color: 0xd8ccb3, roof: 'pyramid', roofColor: 0x564135, rows: 4, cols: 4, balcony: true },
  card: { w: 9.5, h: 7.2, d: 9, color: 0xeae0ca, roof: 'flat', roofColor: 0x3f4d43, rows: 2, cols: 3, accent: true },
  teaching: { w: 17, h: 9, d: 10, color: 0xded2b8, roof: 'flat', roofColor: 0x39473d, rows: 3, cols: 6, tower: true },
  hospital: { w: 11.5, h: 7.4, d: 9, color: 0xe9e5d9, roof: 'flat', roofColor: 0x46544b, rows: 2, cols: 4, cross: true },
  express: { w: 13, h: 5.2, d: 10, color: 0xc9b18d, roof: 'flat', roofColor: 0x4b4036, rows: 1, cols: 3, parcels: true },
  canteen: { w: 16, h: 6.4, d: 12, color: 0xe4d5b7, roof: 'flat', roofColor: 0x524236, rows: 1, cols: 6, chimney: true }
};

const winLit = new THREE.MeshBasicMaterial({ color: 0xffdf9f, fog: true });
const winDim = new THREE.MeshBasicMaterial({ color: 0x7fa8ab, fog: true });
const winWarm = new THREE.MeshBasicMaterial({ color: 0xffc27a, fog: true });

function shadowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 4, 64, 64, 62);
  g.addColorStop(0, 'rgba(0,0,0,.55)');
  g.addColorStop(0.55, 'rgba(0,0,0,.25)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  return tex;
}
const shadowTex = shadowTexture();

function addGroundShadow(x, z, w, d, opacity) {
  const mat = new THREE.MeshBasicMaterial({
    map: shadowTex, transparent: true, opacity: opacity, depthWrite: false
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(x, 0.045, z);
  mesh.scale.set(w, d, 1);
  scene.add(mesh);
  return mesh;
}

function addWindows(group, cfg) {
  const { w, h, d, rows, cols } = cfg;
  const winGeo = new THREE.PlaneGeometry(0.95, 1.32);
  const startY = 1.5;
  const spanY = h - 2.6;
  for (let r = 0; r < rows; r++) {
    const y = startY + (rows === 1 ? spanY * 0.6 : (r / (rows - 1)) * spanY);
    for (let c = 0; c < cols; c++) {
      const x = -w / 2 + ((c + 0.5) / cols) * w;
      for (const zside of [1, -1]) {
        const lit = Math.random() < 0.28;
        const m = new THREE.Mesh(winGeo, lit ? (Math.random() < 0.35 ? winWarm : winLit) : winDim);
        m.position.set(x, y, zside * (d / 2 + 0.03));
        if (zside < 0) m.rotation.y = Math.PI;
        group.add(m);
      }
    }
  }
  // 山墙侧窗
  const sideCols = Math.max(2, Math.round(d / 3.2));
  for (let r = 0; r < rows; r++) {
    const y = startY + (rows === 1 ? spanY * 0.6 : (r / (rows - 1)) * spanY);
    for (let c = 0; c < sideCols; c++) {
      const z = -d / 2 + ((c + 0.5) / sideCols) * d;
      for (const xside of [1, -1]) {
        const lit = Math.random() < 0.24;
        const m = new THREE.Mesh(winGeo, lit ? winLit : winDim);
        m.position.set(xside * (w / 2 + 0.03), y, z);
        m.rotation.y = xside > 0 ? Math.PI / 2 : -Math.PI / 2;
        group.add(m);
      }
    }
  }
}

function createBuilding(cfg) {
  const g = new THREE.Group();
  const { w, h, d } = cfg;

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshLambertMaterial({ color: cfg.color, flatShading: true })
  );
  body.position.y = h / 2;
  g.add(body);

  const plinth = new THREE.Mesh(
    new THREE.BoxGeometry(w + 1.1, 0.5, d + 1.1),
    new THREE.MeshLambertMaterial({ color: 0x2b3c32, flatShading: true })
  );
  plinth.position.y = 0.25;
  g.add(plinth);

  if (cfg.roof === 'pyramid') {
    const roofH = Math.max(w, d) * 0.26;
    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(Math.max(w, d) * 0.75, roofH, 4),
      new THREE.MeshLambertMaterial({ color: cfg.roofColor, flatShading: true })
    );
    roof.rotation.y = Math.PI / 4;
    roof.position.y = h + roofH / 2 - 0.1;
    g.add(roof);
  } else {
    const roof = new THREE.Mesh(
      new THREE.BoxGeometry(w + 1.1, 0.38, d + 1.1),
      new THREE.MeshLambertMaterial({ color: cfg.roofColor, flatShading: true })
    );
    roof.position.y = h + 0.19;
    g.add(roof);
    if (cfg.accent) {
      const strip = new THREE.Mesh(
        new THREE.BoxGeometry(w + 1.2, 0.09, 0.14),
        new THREE.MeshBasicMaterial({ color: 0xd9efa6, transparent: true, opacity: 0.55 })
      );
      strip.position.set(0, h + 0.04, d / 2 + 0.6);
      g.add(strip);
    }
  }

  // 入口
  const door = new THREE.Mesh(
    new THREE.PlaneGeometry(2.3, 2.9),
    new THREE.MeshBasicMaterial({ color: 0x1d1713 })
  );
  door.position.set(0, 1.55, d / 2 + 0.04);
  g.add(door);
  const doorGlow = new THREE.Mesh(
    new THREE.PlaneGeometry(2.7, 3.1),
    new THREE.MeshBasicMaterial({ color: 0xffc777, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  doorGlow.position.set(0, 1.65, d / 2 + 0.02);
  g.add(doorGlow);
  const canopy = new THREE.Mesh(
    new THREE.BoxGeometry(3.8, 0.16, 1.5),
    new THREE.MeshLambertMaterial({ color: cfg.roofColor })
  );
  canopy.position.set(0, 3.35, d / 2 + 0.6);
  g.add(canopy);

  addWindows(g, cfg);

  if (cfg.balcony) {
    for (let r = 1; r < cfg.rows; r++) {
      const y = 1.5 + (r / (cfg.rows - 1)) * (h - 2.6) - 0.85;
      const slab = new THREE.Mesh(
        new THREE.BoxGeometry(w + 0.7, 0.14, 0.9),
        new THREE.MeshLambertMaterial({ color: 0xc4b79f })
      );
      slab.position.set(0, y, d / 2 + 0.35);
      g.add(slab);
    }
  }

  if (cfg.tower) {
    const tw = 3.2, th = h + 4.6;
    const tower = new THREE.Mesh(
      new THREE.BoxGeometry(tw, th, tw),
      new THREE.MeshLambertMaterial({ color: cfg.color, flatShading: true })
    );
    tower.position.set(w / 2 - 1.2, th / 2, 0);
    g.add(tower);
    const cap = new THREE.Mesh(
      new THREE.ConeGeometry(tw * 0.82, 2.2, 4),
      new THREE.MeshLambertMaterial({ color: cfg.roofColor, flatShading: true })
    );
    cap.rotation.y = Math.PI / 4;
    cap.position.set(w / 2 - 1.2, th + 1.1, 0);
    g.add(cap);
    const face = new THREE.Mesh(
      new THREE.CircleGeometry(0.95, 24),
      new THREE.MeshBasicMaterial({ color: 0xf3e8cf })
    );
    face.position.set(w / 2 - 1.2, th - 2.2, tw / 2 + 0.03);
    g.add(face);
    const hand = new THREE.Mesh(
      new THREE.PlaneGeometry(0.08, 0.62),
      new THREE.MeshBasicMaterial({ color: 0x2a2a2a })
    );
    hand.position.set(w / 2 - 1.2, th - 2.2, tw / 2 + 0.05);
    hand.geometry.translate(0, 0.28, 0);
    hand.rotation.z = -0.6;
    g.add(hand);
  }

  if (cfg.cross) {
    const crossMat = new THREE.MeshBasicMaterial({ color: 0x8fe0a3 });
    const v = new THREE.Mesh(new THREE.BoxGeometry(0.42, 2.1, 0.12), crossMat);
    v.position.set(0, h * 0.7, d / 2 + 0.12);
    const hbar = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.42, 0.12), crossMat);
    hbar.position.set(0, h * 0.7, d / 2 + 0.12);
    g.add(v, hbar);
  }

  if (cfg.parcels) {
    const colors = [0xb98b5e, 0xd9c3a0, 0x9c7550];
    for (let i = 0; i < 7; i++) {
      const s = 0.7 + Math.random() * 0.5;
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(s, s * 0.8, s),
        new THREE.MeshLambertMaterial({ color: colors[i % 3], flatShading: true })
      );
      box.position.set(w / 2 + 0.5 + (i % 3) * 1.05, 0.4 + (i % 2) * 0.55, -d / 2 + 1 + Math.floor(i / 3) * 1.1);
      box.rotation.y = Math.random() * 0.5;
      g.add(box);
    }
  }

  if (cfg.chimney) {
    const chimney = new THREE.Mesh(
      new THREE.CylinderGeometry(0.55, 0.7, 3.2, 8),
      new THREE.MeshLambertMaterial({ color: 0x6b5546, flatShading: true })
    );
    chimney.position.set(w / 2 - 2.2, h + 1.6, -d / 2 + 2);
    g.add(chimney);
    const smoke = new THREE.Mesh(
      new THREE.SphereGeometry(0.55, 8, 6),
      new THREE.MeshBasicMaterial({ color: 0xd9cdb9, transparent: true, opacity: 0.18 })
    );
    smoke.position.set(w / 2 - 2.2, h + 3.5, -d / 2 + 2);
    smoke.scale.set(1, 0.7, 1);
    g.add(smoke);
  }

  return g;
}

const stopVisuals = new Map();

function buildStop(stop) {
  const cfg = BUILD_CFG[stop.kind];
  const markerAt = roadSide(stop.t, stop.side, 8.2);
  const buildingAt = roadSide(stop.t, stop.side, 8.2 + 5.5 + cfg.d / 2);

  const building = createBuilding(cfg);
  building.position.set(buildingAt.pos.x, terrainY(buildingAt.pos.x, buildingAt.pos.z), buildingAt.pos.z);
  building.rotation.y = buildingAt.rot;
  scene.add(building);
  addGroundShadow(buildingAt.pos.x, buildingAt.pos.z, cfg.w + 8, cfg.d + 8, 0.32);
  colliders.push({
    x: buildingAt.pos.x, z: buildingAt.pos.z,
    r: Math.max(cfg.d, cfg.w * 0.62) * 0.5 + 2
  });

  // 光圈
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xd9efa6, transparent: true, opacity: 0.55, side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  const ring = new THREE.Mesh(new THREE.RingGeometry(3.1, 3.6, 52), ringMat);
  ring.rotation.x = -Math.PI / 2;
  ring.position.set(markerAt.pos.x, 0.18, markerAt.pos.z);
  scene.add(ring);

  const ring2 = new THREE.Mesh(
    new THREE.RingGeometry(4.15, 4.28, 52),
    new THREE.MeshBasicMaterial({
      color: 0xe9dfc9, transparent: true, opacity: 0.18, side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending, depthWrite: false
    })
  );
  ring2.rotation.x = -Math.PI / 2;
  ring2.position.set(markerAt.pos.x, 0.17, markerAt.pos.z);
  scene.add(ring2);

  const beam = new THREE.Mesh(
    new THREE.CylinderGeometry(2.5, 3.5, 13, 24, 1, true),
    new THREE.MeshBasicMaterial({
      color: 0xd9efa6, transparent: true, opacity: 0.045, side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending, depthWrite: false
    })
  );
  beam.position.set(markerAt.pos.x, 6.6, markerAt.pos.z);
  scene.add(beam);

  const label = makeLabel(stop.name, isTouch ? '靠近查看' : '按 E 查看');
  label.position.set(markerAt.pos.x, 11.4, markerAt.pos.z);
  scene.add(label);

  const node = {
    stop, ring, ring2, beam, label,
    position: new THREE.Vector3(markerAt.pos.x, 0, markerAt.pos.z),
    phase: Math.random() * Math.PI * 2
  };
  markerNodes.push(node);
  stopVisuals.set(stop.id, node);
}

function makeLabel(title, sub) {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 180;
  const ctx = c.getContext('2d');
  ctx.textAlign = 'center';
  ctx.shadowColor = 'rgba(3,10,7,.8)';
  ctx.shadowBlur = 18;
  ctx.fillStyle = '#fff1d2';
  ctx.font = '600 58px "Noto Serif SC","Songti SC","SimSun",serif';
  ctx.fillText(title, 256, 76);
  ctx.shadowBlur = 10;
  ctx.fillStyle = '#d9efa6';
  ctx.font = '400 25px "Microsoft YaHei","PingFang SC",sans-serif';
  ctx.fillText(sub, 256, 122);
  const tex = new THREE.CanvasTexture(c);
  tex.encoding = THREE.sRGBEncoding;
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const mat = new THREE.SpriteMaterial({
    map: tex, transparent: true, depthTest: false, depthWrite: false, fog: false
  });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(9.4, 3.31, 1);
  sprite.renderOrder = 30;
  return sprite;
}

/* ---------- 小地图 ---------- */

const MAP_W = 200, MAP_H = 240, MAP_PAD_X = 24, MAP_PAD_Y = 18;
const MAP_X_MIN = -34, MAP_X_MAX = 34, MAP_Z_MIN = -142, MAP_Z_MAX = 148;

function mapPoint(x, z) {
  const u = (x - MAP_X_MIN) / (MAP_X_MAX - MAP_X_MIN);
  const v = (z - MAP_Z_MIN) / (MAP_Z_MAX - MAP_Z_MIN);
  return {
    x: MAP_PAD_X + u * (MAP_W - MAP_PAD_X * 2),
    y: MAP_PAD_Y + v * (MAP_H - MAP_PAD_Y * 2)
  };
}

function buildMinimap() {
  const path = $('#map-route');
  const group = $('#map-stops');
  mapCarEl = $('#map-car');
  if (!path || !group) return;

  const pts = [];
  for (let i = 0; i <= 120; i++) {
    const p = route.getPointAt(i / 120);
    pts.push(mapPoint(p.x, p.z));
  }
  path.setAttribute('d', pts.map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' '));

  group.replaceChildren();
  mapMarkers.clear();
  for (const stop of STOPS) {
    const at = roadSide(stop.t, stop.side, 8.2).pos;
    const p = mapPoint(at.x, at.z);
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', p.x.toFixed(1));
    circle.setAttribute('cy', p.y.toFixed(1));
    circle.setAttribute('r', '4');
    circle.setAttribute('class', 'map-stop');
    circle.dataset.id = stop.id;
    group.appendChild(circle);
    mapMarkers.set(stop.id, circle);
  }

  const ep = mapPoint(endPos.x, endPos.z);
  mapEndEl = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  mapEndEl.setAttribute('x', (ep.x - 3.4).toFixed(1));
  mapEndEl.setAttribute('y', (ep.y - 3.4).toFixed(1));
  mapEndEl.setAttribute('width', '6.8');
  mapEndEl.setAttribute('height', '6.8');
  mapEndEl.setAttribute('transform', `rotate(45 ${ep.x.toFixed(1)} ${ep.y.toFixed(1)})`);
  mapEndEl.setAttribute('class', 'map-end');
  group.appendChild(mapEndEl);

  refreshMinimap();
}

function nextStop() {
  return STOPS.find(s => !opened.has(s.id)) || null;
}

function refreshMinimap() {
  if (!mapMarkers.size) return;
  const next = nextStop();
  for (const [id, el] of mapMarkers) {
    el.classList.toggle('done', opened.has(id));
    el.classList.toggle('next', !!next && next.id === id);
  }
  if (mapEndEl) mapEndEl.classList.toggle('next', !next);
}

function updateMinimapCar() {
  if (!mapCarEl) return;
  const p = mapPoint(carState.position.x, carState.position.z);
  const deg = (Math.PI - carState.heading) * 180 / Math.PI;
  mapCarEl.setAttribute('transform', `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) rotate(${deg.toFixed(1)})`);
}

/* ---------- 校门 / 地标 ---------- */

function buildGate() {
  const at = roadSide(GATE_T, 0, 0);
  const g = new THREE.Group();
  g.position.set(at.pos.x, 0, at.pos.z);
  g.rotation.y = Math.atan2(at.tan.x, at.tan.z);
  gatePos.set(at.pos.x, 0, at.pos.z);

  const pillarMat = new THREE.MeshLambertMaterial({ color: 0xd8cbb1, flatShading: true });
  for (const x of [-6.7, 6.7]) {
    const pillar = new THREE.Mesh(new THREE.BoxGeometry(1.45, 6.8, 1.45), pillarMat);
    pillar.position.set(x, 3.4, 0);
    g.add(pillar);
    const cap = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.35, 1.9), new THREE.MeshLambertMaterial({ color: 0x4b3f33 }));
    cap.position.set(x, 6.98, 0);
    g.add(cap);
    const light = new THREE.Mesh(
      new THREE.PlaneGeometry(0.08, 4.4),
      new THREE.MeshBasicMaterial({ color: 0xffd08a, transparent: true, opacity: 0.8 })
    );
    light.position.set(x - Math.sign(x) * 0.74, 3.3, 0);
    light.rotation.y = -Math.sign(x) * Math.PI / 2;
    g.add(light);
  }

  const beam = new THREE.Mesh(
    new THREE.BoxGeometry(15.2, 1.25, 1.7),
    new THREE.MeshLambertMaterial({ color: 0x1b2c23, flatShading: true })
  );
  beam.position.set(0, 7.15, 0);
  g.add(beam);

  const signCanvas = document.createElement('canvas');
  signCanvas.width = 1400;
  signCanvas.height = 280;
  const sc = signCanvas.getContext('2d');
  sc.textAlign = 'center';
  sc.fillStyle = '#fff0ce';
  sc.shadowColor = 'rgba(255,190,110,.75)';
  sc.shadowBlur = 26;
  sc.font = '600 128px "Noto Serif SC","Songti SC","SimSun",serif';
  sc.fillText('重庆邮电大学', 700, 150);
  sc.shadowBlur = 8;
  sc.fillStyle = '#d9efa6';
  sc.font = '400 40px "Microsoft YaHei","PingFang SC",sans-serif';
  sc.fillText('在南山，第一次出发', 700, 218);
  const signTex = new THREE.CanvasTexture(signCanvas);
  signTex.encoding = THREE.sRGBEncoding;
  signTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const sign = new THREE.Mesh(
    new THREE.PlaneGeometry(11.4, 2.28),
    new THREE.MeshBasicMaterial({ map: signTex, transparent: true, fog: false })
  );
  sign.position.set(0, 7.2, -0.9);
  sign.rotation.y = Math.PI;
  g.add(sign);

  // 校门前的两道矮墙，限定入口
  const wallMat = new THREE.MeshLambertMaterial({ color: 0x3d4b40 });
  for (const x of [-13.5, 13.5]) {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(7.5, 1.15, 0.7), wallMat);
    wall.position.set(x, 0.57, 0);
    g.add(wall);
  }

  scene.add(g);
  addGroundShadow(at.pos.x, at.pos.z, 30, 14, 0.28);
}

function buildEnding() {
  const at = roadSide(END_T, 0, 0);
  endPos.set(at.pos.x, 0, at.pos.z);
  const g = new THREE.Group();
  g.position.set(at.pos.x, 0, at.pos.z);
  g.rotation.y = Math.atan2(at.tan.x, at.tan.z);

  const pillarMat = new THREE.MeshLambertMaterial({ color: 0xd8cbb1, flatShading: true });
  for (const x of [-5.9, 5.9]) {
    const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.95, 6.4, 0.95), pillarMat);
    pillar.position.set(x, 3.2, 0);
    g.add(pillar);
    const cap = new THREE.Mesh(
      new THREE.BoxGeometry(1.3, 0.28, 1.3),
      new THREE.MeshLambertMaterial({ color: 0x4b3f33 })
    );
    cap.position.set(x, 6.54, 0);
    g.add(cap);
    const light = new THREE.Mesh(
      new THREE.PlaneGeometry(0.07, 4.2),
      new THREE.MeshBasicMaterial({ color: 0xffd08a, transparent: true, opacity: 0.85 })
    );
    light.position.set(x - Math.sign(x) * 0.49, 3.1, 0);
    light.rotation.y = -Math.sign(x) * Math.PI / 2;
    g.add(light);
  }

  const beam = new THREE.Mesh(
    new THREE.BoxGeometry(12.8, 1.15, 1.1),
    new THREE.MeshLambertMaterial({ color: 0x1b2c23, flatShading: true })
  );
  beam.position.set(0, 6.4, 0);
  g.add(beam);

  const signCanvas = document.createElement('canvas');
  signCanvas.width = 1200;
  signCanvas.height = 220;
  const sc = signCanvas.getContext('2d');
  sc.textAlign = 'center';
  sc.fillStyle = '#fff0ce';
  sc.shadowColor = 'rgba(255,190,110,.7)';
  sc.shadowBlur = 22;
  sc.font = '600 82px "Noto Serif SC","Songti SC","SimSun",serif';
  sc.fillText('终点 · 重邮教务在线', 600, 100);
  sc.shadowBlur = 6;
  sc.fillStyle = '#d9efa6';
  sc.font = '400 30px "Microsoft YaHei","PingFang SC",sans-serif';
  sc.fillText('南山第一程，到这里', 600, 160);
  const signTex = new THREE.CanvasTexture(signCanvas);
  signTex.encoding = THREE.sRGBEncoding;
  signTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const sign = new THREE.Mesh(
    new THREE.PlaneGeometry(9.8, 1.8),
    new THREE.MeshBasicMaterial({ map: signTex, transparent: true, fog: false })
  );
  sign.position.set(0, 6.4, -0.62);
  sign.rotation.y = Math.PI;
  g.add(sign);

  const portalCanvas = document.createElement('canvas');
  portalCanvas.width = portalCanvas.height = 128;
  const pc = portalCanvas.getContext('2d');
  const pg = pc.createRadialGradient(64, 64, 2, 64, 64, 64);
  pg.addColorStop(0, 'rgba(255,224,166,.7)');
  pg.addColorStop(0.45, 'rgba(217,239,166,.18)');
  pg.addColorStop(1, 'rgba(217,239,166,0)');
  pc.fillStyle = pg;
  pc.fillRect(0, 0, 128, 128);
  const portalTex = new THREE.CanvasTexture(portalCanvas);
  portalTex.encoding = THREE.sRGBEncoding;
  const portal = new THREE.Mesh(
    new THREE.PlaneGeometry(9.6, 5.4),
    new THREE.MeshBasicMaterial({
      map: portalTex, transparent: true, opacity: 0.5, depthWrite: false,
      blending: THREE.AdditiveBlending, side: THREE.DoubleSide
    })
  );
  portal.position.set(0, 3.0, 0);
  portal.rotation.y = Math.PI;
  g.add(portal);
  endingPortal = portal;

  scene.add(g);
  addGroundShadow(at.pos.x, at.pos.z, 22, 10, 0.26);

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(3.2, 3.7, 52),
    new THREE.MeshBasicMaterial({
      color: 0xe9dfc9, transparent: true, opacity: 0.55, side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending, depthWrite: false
    })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.set(at.pos.x, 0.19, at.pos.z);
  scene.add(ring);
  endingRing = ring;

  const beamGlow = new THREE.Mesh(
    new THREE.CylinderGeometry(2.6, 3.6, 12, 24, 1, true),
    new THREE.MeshBasicMaterial({
      color: 0xffe0a6, transparent: true, opacity: 0.04, side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending, depthWrite: false
    })
  );
  beamGlow.position.set(at.pos.x, 6, at.pos.z);
  scene.add(beamGlow);
}

function buildLandmark() {
  // 图书馆：远一点的剪影，不参与交互
  const g = createBuilding({ w: 18, h: 14, d: 13, color: 0xd9cdb4, roof: 'flat', roofColor: 0x3a473d, rows: 4, cols: 6, accent: true });
  const x = -47, z = -18;
  g.position.set(x, terrainY(x, z), z);
  g.rotation.y = Math.PI / 2;
  scene.add(g);
  addGroundShadow(x, z, 28, 23, 0.3);
  colliders.push({ x, z, r: 11 });

  // 门前柱廊
  const colGeo = new THREE.CylinderGeometry(0.38, 0.42, 8.4, 8);
  const colMat = new THREE.MeshLambertMaterial({ color: 0xe9dfc9, flatShading: true });
  for (let i = 0; i < 5; i++) {
    const col = new THREE.Mesh(colGeo, colMat);
    col.position.set(x + 7.5, 4.2, z - 4.4 + i * 2.2);
    scene.add(col);
  }
}

/* ---------- 车 ---------- */

function buildCar() {
  car = new THREE.Group();
  carGroup = car;

  const lower = new THREE.Mesh(
    new THREE.BoxGeometry(2.25, 0.42, 4.05),
    new THREE.MeshLambertMaterial({ color: 0x24352c, flatShading: true })
  );
  lower.position.y = 0.45;
  car.add(lower);

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(2.1, 0.62, 3.7),
    new THREE.MeshLambertMaterial({ color: 0xe2b27a, flatShading: true })
  );
  body.position.y = 0.92;
  car.add(body);

  const stripe = new THREE.Mesh(
    new THREE.BoxGeometry(2.12, 0.16, 3.72),
    new THREE.MeshLambertMaterial({ color: 0xd9efa6 })
  );
  stripe.position.y = 1.02;
  car.add(stripe);

  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(1.82, 0.62, 1.85),
    new THREE.MeshLambertMaterial({ color: 0x2a3b33, flatShading: true })
  );
  cabin.position.set(0, 1.52, -0.18);
  car.add(cabin);

  const roof = new THREE.Mesh(
    new THREE.BoxGeometry(1.9, 0.14, 1.95),
    new THREE.MeshLambertMaterial({ color: 0xefe4cc, flatShading: true })
  );
  roof.position.set(0, 1.88, -0.18);
  car.add(roof);

  const wheelGeo = new THREE.CylinderGeometry(0.44, 0.44, 0.34, 12);
  wheelGeo.rotateZ(Math.PI / 2);
  const wheelMat = new THREE.MeshLambertMaterial({ color: 0x171b18, flatShading: true });
  const rimMat = new THREE.MeshBasicMaterial({ color: 0xb9c4a8 });
  const wheelPos = [
    [-1.08, 0.46, 1.26], [1.08, 0.46, 1.26],
    [-1.08, 0.46, -1.24], [1.08, 0.46, -1.24]
  ];
  wheelPos.forEach((p, i) => {
    const wheel = new THREE.Mesh(wheelGeo, wheelMat);
    wheel.position.set(p[0], p[1], p[2]);
    car.add(wheel);
    const rim = new THREE.Mesh(new THREE.CircleGeometry(0.2, 10), rimMat);
    rim.position.set(p[0] + Math.sign(p[0]) * 0.18, p[1], p[2]);
    rim.rotation.y = Math.sign(p[0]) * Math.PI / 2;
    car.add(rim);
    if (i < 2) frontWheels.push(wheel);
  });

  const headMat = new THREE.MeshBasicMaterial({ color: 0xfff2c4 });
  for (const x of [-0.68, 0.68]) {
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.2, 0.06), headMat);
    head.position.set(x, 0.95, 1.87);
    car.add(head);
  }
  const tailMat = new THREE.MeshBasicMaterial({ color: 0xff7b62 });
  for (const x of [-0.7, 0.7]) {
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.16, 0.06), tailMat);
    tail.position.set(x, 0.95, -1.87);
    car.add(tail);
  }

  carLight = new THREE.PointLight(0xffd9a0, 0.32, 24, 1.8);
  carLight.position.set(0, 1.1, 2.3);
  car.add(carLight);

  // 车底柔影
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0.5, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.04;
  shadow.scale.set(6, 6.6, 1);
  car.add(shadow);

  scene.add(car);
}

function placeCarAt(t = START_T) {
  const p = route.getPointAt(t);
  const tan = route.getTangentAt(t).normalize();
  carState.position.set(p.x, terrainY(p.x, p.z) + 0.02, p.z);
  carState.heading = Math.atan2(tan.x, tan.z);
  carState.speed = 0;
  carState.steer = 0;
  car.position.copy(carState.position);
  car.rotation.y = carState.heading;
  car.rotation.z = 0;
}

function resetCar(silent, t = START_T) {
  placeCarAt(t);
  snapCamera();
  driving = true;
  closePanel(true);
  closeList(true);
  if (!silent) toast('回到校门，重新出发');
}

/* ---------- 相机 ---------- */

function cameraRig() {
  const portrait = window.innerWidth / window.innerHeight < 0.8;
  return portrait
    ? { dist: 18, height: 9.2, look: 6.8, lookY: 3.6 }
    : { dist: 12.2, height: 6.6, look: 6, lookY: 3.4 };
}

function snapCamera() {
  const fx = Math.sin(carState.heading), fz = Math.cos(carState.heading);
  const rig = cameraRig();
  camera.position.set(
    carState.position.x - fx * rig.dist,
    carState.position.y + rig.height,
    carState.position.z - fz * rig.dist
  );
  camera.lookAt(
    carState.position.x + fx * rig.look,
    carState.position.y + rig.lookY,
    carState.position.z + fz * rig.look
  );
}

function updateCamera(dt) {
  const fx = Math.sin(carState.heading), fz = Math.cos(carState.heading);
  const rig = cameraRig();
  const desiredX = carState.position.x - fx * rig.dist;
  const desiredZ = carState.position.z - fz * rig.dist;
  const desiredY = Math.max(terrainY(desiredX, desiredZ), carState.position.y) + rig.height;
  const k = 1 - Math.exp(-dt * 3.6);
  camera.position.x = lerp(camera.position.x, desiredX, k);
  camera.position.y = lerp(camera.position.y, desiredY, k * 0.9);
  camera.position.z = lerp(camera.position.z, desiredZ, k);
  const lookX = carState.position.x + fx * rig.look;
  const lookZ = carState.position.z + fz * rig.look;
  camera.lookAt(lookX, carState.position.y + rig.lookY, lookZ);
}

/* ---------- 驾驶 ---------- */

function inputRead() {
  let throttle = 0, steer = 0;
  if (keys.has('w') || keys.has('arrowup')) throttle += 1;
  if (keys.has('s') || keys.has('arrowdown')) throttle -= 1;
  if (keys.has('d') || keys.has('arrowright')) steer += 1;
  if (keys.has('a') || keys.has('arrowleft')) steer -= 1;
  if (joy.active) {
    throttle += -joy.y;
    steer += joy.x;
  }
  return { throttle: clamp(throttle, -1, 1), steer: clamp(steer, -1, 1) };
}

function collides(x, z) {
  if (Math.abs(x) > 60 || Math.abs(z) > 154) return true;
  for (const c of colliders) {
    const dx = x - c.x, dz = z - c.z;
    if (dx * dx + dz * dz < (c.r + 1.5) * (c.r + 1.5)) return true;
  }
  return false;
}

function updateCar(dt) {
  const inp = driving ? inputRead() : { throttle: 0, steer: 0 };
  const maxForward = 19, maxReverse = 6.5;

  if (inp.throttle > 0) {
    carState.speed += 24 * dt * inp.throttle;
  } else if (inp.throttle < 0) {
    if (carState.speed > 0.2) carState.speed -= 34 * dt;
    else carState.speed += 15 * dt * inp.throttle;
  } else {
    const drag = Math.sign(carState.speed) * 7.2 * dt;
    if (Math.abs(carState.speed) <= Math.abs(drag)) carState.speed = 0;
    else carState.speed -= drag;
  }
  carState.speed = clamp(carState.speed, -maxReverse, maxForward);

  const speedFactor = clamp(Math.abs(carState.speed) / 6, 0, 1);
  const dir = carState.speed >= 0 ? 1 : -1;
  if (Math.abs(carState.speed) > 0.15) {
    carState.heading -= inp.steer * 1.75 * dt * speedFactor * dir;
  }
  carState.steer = lerp(carState.steer, inp.steer, 1 - Math.exp(-dt * 8));

  const fx = Math.sin(carState.heading), fz = Math.cos(carState.heading);
  const step = carState.speed * dt;
  let nx = carState.position.x + fx * step;
  let nz = carState.position.z + fz * step;

  if (collides(nx, nz)) {
    if (!collides(nx, carState.position.z)) {
      nz = carState.position.z;
      carState.speed *= 0.86;
    } else if (!collides(carState.position.x, nz)) {
      nx = carState.position.x;
      carState.speed *= 0.86;
    } else {
      nx = carState.position.x;
      nz = carState.position.z;
      carState.speed *= 0.5;
    }
  }

  carState.position.x = nx;
  carState.position.z = nz;
  const targetY = terrainY(nx, nz) + 0.02;
  carState.position.y = lerp(carState.position.y, targetY, 1 - Math.exp(-dt * 9));

  car.position.copy(carState.position);
  car.rotation.y = carState.heading;
  const lean = -carState.steer * 0.035 * speedFactor;
  car.rotation.z = lerp(car.rotation.z, lean, 1 - Math.exp(-dt * 6));

  carState.wheelSpin += (carState.speed * dt) / 0.44;
  for (const w of frontWheels) {
    w.rotation.x = carState.wheelSpin;
    w.rotation.y = carState.steer * 0.38;
  }

  // 车灯随速度微微呼吸
  if (!reducedMotion) {
    carLight.intensity = 0.3 + Math.sin(performance.now() * 0.003) * 0.025;
  }
}

/* ---------- 提示 / 最近站点 ---------- */

function nearestStop() {
  let best = null, bestD = Infinity;
  for (const node of markerNodes) {
    const dx = carState.position.x - node.position.x;
    const dz = carState.position.z - node.position.z;
    const d = Math.hypot(dx, dz);
    if (d < bestD) { bestD = d; best = node; }
  }
  return { node: best, distance: bestD };
}

let lastHud = '';
function updateNearby() {
  const near = nearestStop();
  nearStop = near.distance < 11 ? near.node : null;
  const show = !!nearStop && !panelOpen && !listOpen && !endingOpen;
  const prompt = $('#prompt');
  if (show) {
    if (prompt.hidden) prompt.hidden = false;
    $('#prompt-text').textContent = '查看 · ' + nearStop.stop.name;
  } else if (!prompt.hidden) {
    prompt.hidden = true;
  }

  const dGate = Math.hypot(carState.position.x - gatePos.x, carState.position.z - gatePos.z);
  const name = nearStop ? nearStop.stop.name : (dGate < 26 ? '校门' : '南山路上');
  const target = nextStop();
  const targetNode = target ? markerNodes.find(n => n.stop.id === target.id) : null;
  let nextSub;
  if (target) {
    const d = targetNode
      ? Math.hypot(carState.position.x - targetNode.position.x, carState.position.z - targetNode.position.z)
      : 0;
    nextSub = `下一站 · ${target.name}${d > 1 ? ` · ${Math.round(d)} 米` : ''}`;
  } else {
    const dEnd = Math.hypot(carState.position.x - endPos.x, carState.position.z - endPos.z);
    nextSub = `终点 · 教务在线${dEnd > 1 ? ` · ${Math.round(dEnd)} 米` : ''}`;
  }
  const sub = nearStop
    ? (isTouch ? '点下方查看' : '按 E 或点下方查看')
    : nextSub;
  const key = name + sub;
  if (key !== lastHud) {
    lastHud = key;
    $('#near-name').textContent = name;
    $('#near-sub').textContent = sub;
  }
}

/* ---------- UI ---------- */

function bindUI() {
  $('#open-list').addEventListener('click', () => openList());
  $('#panel-close').addEventListener('click', () => closePanel());
  $('#panel-back').addEventListener('click', () => closePanel());
  $('#list-close').addEventListener('click', () => closeList());
  $('#reset-car').addEventListener('click', () => resetCar());
  $('#prompt-btn').addEventListener('click', interact);
  $('#ending-stay').addEventListener('click', dismissEnding);
  $('#ending-link').addEventListener('click', () => clearInterval(endingTimer));
  $('#brand') && $('#brand').addEventListener('click', e => e.preventDefault());

  $('#panel').addEventListener('pointerdown', e => {
    if (e.target === $('#panel')) closePanel();
  });

  $('#list').addEventListener('click', e => {
    if (e.target === $('#list')) closeList();
  });
}

function openStop(stop, fromList) {
  if (!stop) return;
  currentStop = stop;
  lastFocus = document.activeElement;
  panelOpen = true;
  driving = false;

  $('#panel-title').textContent = stop.name;
  $('#panel-intro').textContent = stop.intro;
  $('#panel-index').textContent = stop.extra ? '出发前' : `${pad2(stop.order)} / 07`;
  $('#panel-zone').textContent = stop.zone;
  const list = $('#panel-steps');
  list.replaceChildren();
  for (const text of stop.steps) {
    const li = document.createElement('li');
    li.innerHTML = text;
    list.append(li);
  }
  $('#panel-note').textContent = stop.note;

  const panel = $('#panel');
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  $('#prompt').hidden = true;
  try { history.replaceState(null, '', '#stop-' + stop.id); } catch { /* file:// 下忽略 */ }

  if (!stop.extra) {
    opened.add(stop.id);
    saveStore(STORE_KEY, [...opened]);
    updateProgress();
  }

  if (fromList) closeList(true);

  setTimeout(() => $('#panel-close').focus({ preventScroll: true }), 120);
}

function closePanel(silent) {
  const panel = $('#panel');
  if (!panel.classList.contains('open')) return;
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  panelOpen = false;
  driving = true;
  currentStop = null;
  if (location.hash.indexOf('#stop-') === 0) {
    try { history.replaceState(null, '', location.pathname + location.search); } catch { /* 忽略 */ }
  }
  if (!silent) {
    const canvas = $('#stage');
    if (canvas) canvas.focus({ preventScroll: true });
  }
}

function openList(silent) {
  const list = $('#list');
  if (list.classList.contains('open')) return;
  if (panelOpen) closePanel(true);
  lastFocus = document.activeElement;
  listOpen = true;
  driving = false;
  list.classList.add('open');
  list.setAttribute('aria-hidden', 'false');
  refreshCards();
  setTimeout(() => $('#list-close').focus({ preventScroll: true }), 100);
}

function closeList(silent) {
  const list = $('#list');
  if (!list.classList.contains('open')) return;
  list.classList.remove('open');
  list.setAttribute('aria-hidden', 'true');
  listOpen = false;
  if (!panelOpen) driving = true;
  if (!silent) {
    const canvas = $('#stage');
    if (canvas) canvas.focus({ preventScroll: true });
  }
}

function buildList() {
  const grid = $('#card-grid');
  grid.replaceChildren();
  for (const stop of ALL_CARDS) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'card' + (stop.extra ? ' extra' : '');
    card.dataset.stop = stop.id;
    card.innerHTML = `<span class="num">${stop.extra ? '出发前' : pad2(stop.order)}</span>
      <h3>${stop.name}</h3>
      <p>${stop.short}</p>
      <span class="go">查看步骤 <i>→</i></span>`;
    card.addEventListener('click', () => openStop(stop, true));
    grid.append(card);
  }
}

function refreshCards() {
  for (const card of document.querySelectorAll('.card')) {
    card.classList.toggle('done', opened.has(card.dataset.stop));
  }
}

function updateProgress() {
  $('#done-count').textContent = String(opened.size);
  $('#done-total').textContent = String(STOPS.length);
  refreshCards();
  refreshMinimap();
  if (opened.size === STOPS.length && !updateProgress.celebrated) {
    updateProgress.celebrated = true;
    setTimeout(() => toast('七站都走过了，剩下的慢慢来'), 500);
  }
}

function interact() {
  if (endingOpen) return;
  if (panelOpen) { closePanel(); return; }
  if (listOpen) { closeList(); return; }
  if (nearStop) { openStop(nearStop.stop); return; }
  toast('开到光圈里，再按 E 查看');
}

/* ---------- 终点 ---------- */

function checkEnding() {
  if (endingOpen) return;
  const d = Math.hypot(carState.position.x - endPos.x, carState.position.z - endPos.z);
  if (d > 18) { endingTriggered = false; return; }
  if (endingTriggered || panelOpen || listOpen) return;
  if (d < 10) showEnding();
}

function showEnding() {
  if (endingOpen) return;
  endingOpen = true;
  endingTriggered = true;
  driving = false;

  const el = $('#ending');
  $('#ending-progress').textContent = `已了解 ${opened.size} / ${STOPS.length}`;
  el.classList.add('open');
  el.setAttribute('aria-hidden', 'false');
  $('#prompt').hidden = true;
  startEndingCountdown();
  setTimeout(() => {
    const link = $('#ending-link');
    if (link) link.focus({ preventScroll: true });
  }, 160);
}

function startEndingCountdown() {
  clearInterval(endingTimer);
  endingRemaining = 3;
  updateEndingCount();
  endingTimer = setInterval(() => {
    endingRemaining -= 1;
    if (endingRemaining <= 0) {
      clearInterval(endingTimer);
      goAcademic();
    } else {
      updateEndingCount();
    }
  }, 1000);
}

function updateEndingCount() {
  const el = $('#ending-count');
  if (el) el.textContent = `${endingRemaining} 秒后自动进入教务在线`;
}

function goAcademic() {
  clearInterval(endingTimer);
  try {
    window.location.assign(ACADEMIC_URL);
  } catch {
    window.open(ACADEMIC_URL, '_self');
  }
}

function dismissEnding() {
  if (!endingOpen) return;
  clearInterval(endingTimer);
  endingOpen = false;
  endingTriggered = true;
  const el = $('#ending');
  el.classList.remove('open');
  el.setAttribute('aria-hidden', 'true');
  driving = true;
  toast('继续逛，路还在');
  const canvas = $('#stage');
  if (canvas) canvas.focus({ preventScroll: true });
}

function toast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

/* ---------- 输入 ---------- */

function bindInput() {
  const canvas = $('#stage');
  if (isTouch) {
    $('#joystick').hidden = false;
    document.body.classList.add('touch');
  }

  window.addEventListener('keydown', e => {
    const k = e.key.toLowerCase();
    if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(k)) e.preventDefault();
    keys.add(k);
    if (k === 'e' || k === 'enter') {
      e.preventDefault();
      interact();
    }
    if (k === 'r') {
      e.preventDefault();
      if (endingOpen) dismissEnding();
      else resetCar();
    }
    if (k === 'escape') {
      if (endingOpen) dismissEnding();
      else if (panelOpen) closePanel();
      else if (listOpen) closeList();
    }
  });
  window.addEventListener('keyup', e => keys.delete(e.key.toLowerCase()));
  window.addEventListener('blur', () => keys.clear());

  // 桌面点击画面也可以查看最近的站点
  canvas.addEventListener('click', () => {
    if (!panelOpen && !listOpen && nearStop) openStop(nearStop.stop);
  });

  const base = $('#joystick .joystick-base');
  const knob = $('#joystick-knob');
  const maxR = 38;
  let pid = null;

  function moveJoy(e) {
    const r = base.getBoundingClientRect();
    let dx = e.clientX - (r.left + r.width / 2);
    let dy = e.clientY - (r.top + r.height / 2);
    const len = Math.hypot(dx, dy);
    if (len > maxR) { dx = dx / len * maxR; dy = dy / len * maxR; }
    joy.x = dx / maxR;
    joy.y = dy / maxR;
    joy.active = true;
    knob.style.transform = `translate(${dx}px,${dy}px)`;
  }
  function endJoy() {
    joy.active = false;
    joy.x = 0; joy.y = 0;
    knob.style.transform = 'translate(0,0)';
    pid = null;
  }
  base.addEventListener('pointerdown', e => {
    e.preventDefault();
    pid = e.pointerId;
    base.setPointerCapture(pid);
    moveJoy(e);
  });
  base.addEventListener('pointermove', e => {
    if (pid === e.pointerId) moveJoy(e);
  });
  base.addEventListener('pointerup', e => {
    if (pid === e.pointerId) endJoy();
  });
  base.addEventListener('pointercancel', endJoy);
  base.addEventListener('lostpointercapture', endJoy);
}

/* ---------- 动画循环 ---------- */

let lastTime = 0;
function tick(now) {
  if (document.hidden) return;
  const dt = Math.min((now - lastTime) / 1000 || 0.016, 0.05);
  lastTime = now;

  if (!panelOpen && !listOpen && !endingOpen) {
    updateCar(dt);
    updateCamera(dt);
  } else {
    // 面板打开时车自然减速，镜头保持
    carState.speed *= Math.exp(-dt * 6);
    if (Math.abs(carState.speed) < 0.05) carState.speed = 0;
    car.position.copy(carState.position);
    updateCamera(dt);
  }

  updateNearby();
  updateMinimapCar();
  checkEnding();
  animateMarkers(now);
  renderer.render(scene, camera);
}

function animateMarkers(now) {
  if (reducedMotion) return;
  const t = now * 0.001;
  if (endingRing && endingPortal) {
    const e = 0.5 + 0.5 * Math.sin(t * 1.35);
    endingRing.material.opacity = 0.34 + e * 0.28;
    endingPortal.material.opacity = 0.36 + e * 0.16;
  }
  for (const node of markerNodes) {
    const active = nearStop === node;
    const p = Math.sin(t * 1.6 + node.phase);
    const scale = active ? 1.06 + p * 0.03 : 1 + p * 0.018;
    node.ring.scale.set(scale, scale, 1);
    node.ring.material.opacity = active ? 0.78 : 0.42 + p * 0.08;
    node.ring2.scale.set(1 + p * 0.02, 1 + p * 0.02, 1);
    node.ring2.material.opacity = active ? 0.34 : 0.14;
    node.beam.material.opacity = active ? 0.085 : 0.032 + p * 0.012;
    node.label.position.y = 11.4 + Math.sin(t * 1.2 + node.phase) * 0.18;
  }
}

function onResize() {
  if (!renderer || !camera) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.fov = camera.aspect < 0.8 ? 66 : 52;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
  renderer.setSize(window.innerWidth, window.innerHeight);
}

/* ---------- 启动 ---------- */

if (typeof THREE === 'undefined') {
  showFallback();
} else {
  boot();
}
