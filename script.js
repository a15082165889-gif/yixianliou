/* ===== 数据 ===== */
const MODULES = [
  {
    id: 'symptoms',
    title: '常见症状',
    icon: '🌡️',
    color: '#2563eb',
    cards: [
      {
        id: 'fever',
        title: '发热',
        summary: '发热是指体温升高超过正常范围（>37.3°C）。按热型可分为稽留热、弛张热、间歇热、回归热、波状热和不规则热。',
        tags: ['热型', '体温'],
        sections: [
          { type: 'p', content: '发热（fever）是指机体在致热原作用下，体温调节中枢调定点上移而引起的调节性体温升高。正常体温一般为36~37°C（腋测法）。' },
          { type: 'table', title: '常见热型及特点',
            headers: ['热型', '特点', '常见疾病'],
            rows: [
              ['稽留热', '体温持续39~40°C以上，24h波动<1°C', '大叶性肺炎、伤寒'],
              ['弛张热', '体温>39°C，24h波动>2°C', '败血症、风湿热'],
              ['间歇热', '高热期与无热期交替出现', '疟疾、急性肾盂肾炎'],
              ['回归热', '高热持续数日后降至正常，数日后又发热', '回归热、霍奇金病'],
              ['波状热', '体温逐渐上升又逐渐下降，呈波浪状', '布氏杆菌病'],
              ['不规则热', '发热无规律', '结核病、癌性发热']
            ]
          },
          { type: 'mnemonic', content: '📝 记忆口诀：稽留肺炎伤寒见，弛张败血风湿恋；间歇疟疾肾盂炎，回归热病霍奇金。' }
        ]
      },
      {
        id: 'headache',
        title: '头痛',
        summary: '头痛是临床常见症状，病因多样，包括颅内病变、颅外病变和全身性疾病。',
        tags: ['头痛', '颅内', '偏头痛'],
        sections: [
          { type: 'p', content: '头痛（headache）是指额、顶、颞及枕部的疼痛。头痛的病因可分为颅内病变、颅外病变和全身性疾病三大类。' },
          { type: 'table', title: '头痛的常见类型',
            headers: ['类型', '特点', '常见病因'],
            rows: [
              ['偏头痛', '一侧搏动性头痛，伴恶心呕吐，可有先兆', '血管舒缩功能障碍'],
              ['紧张性头痛', '双侧压迫性或紧缩性痛', '精神紧张、焦虑'],
              ['颅内高压性头痛', '持续性胀痛，晨起加重，伴呕吐', '颅内占位病变'],
              ['三叉神经痛', '面部阵发性电击样剧痛', '三叉神经病变']
            ]
          }
        ]
      },
      {
        id: 'chest-pain',
        title: '胸痛',
        summary: '胸痛由胸部疾病引起，包括胸壁、肺、心血管、纵隔等病变。心源性胸痛需高度警惕。',
        tags: ['胸痛', '心绞痛', '心肌梗死'],
        sections: [
          { type: 'p', content: '胸痛（chest pain）是临床常见症状，主要由胸部疾病引起。不同病因的胸痛有不同的特点，对鉴别诊断至关重要。' },
          { type: 'table', title: '胸痛的鉴别',
            headers: ['疾病', '部位', '性质', '诱因', '缓解方式'],
            rows: [
              ['心绞痛', '胸骨后、心前区', '压榨性、闷痛', '劳累、情绪激动', '休息、硝酸甘油'],
              ['急性心肌梗死', '胸骨后、可放射', '剧烈压榨痛', '无明显诱因', '吗啡、溶栓'],
              ['肺栓塞', '胸痛伴呼吸困难', '刺痛', '卧床后活动', '吸氧、抗凝'],
              ['气胸', '患侧胸痛', '撕裂样', '用力后突發', '胸腔闭式引流']
            ]
          }
        ]
      },
      {
        id: 'abdominal-pain',
        title: '腹痛',
        summary: '腹痛按病程分为急性和慢性，按机制分为内脏性、躯体性和牵涉痛。',
        tags: ['腹痛', '急腹症', '内脏痛'],
        sections: [
          { type: 'p', content: '腹痛（abdominal pain）按起病缓急和病程长短分为急性腹痛和慢性腹痛。急性腹痛常需外科紧急处理（急腹症）。' },
          { type: 'table', title: '急性腹痛常见病因',
            headers: ['疾病', '疼痛部位', '疼痛性质', '伴随症状'],
            rows: [
              ['急性阑尾炎', '转移性右下腹痛', '持续性胀痛→剧痛', '发热、恶心'],
              ['急性胰腺炎', '上腹部，向腰背放射', '持续性剧痛', '恶心呕吐、腹胀'],
              ['胆囊炎/胆石症', '右上腹', '阵发性绞痛', '黄疸、发热'],
              ['消化性溃疡穿孔', '突然上腹剧痛', '刀割样', '板状腹、休克'],
              ['肠梗阻', '脐周', '阵发性绞痛', '呕吐、停止排便排气']
            ]
          }
        ]
      },
      {
        id: 'edema',
        title: '水肿',
        summary: '水肿是组织间隙过多液体积聚。心源性、肾源性、肝源性水肿各有特点。',
        tags: ['水肿', '心源性', '肾源性', '肝源性'],
        sections: [
          { type: 'p', content: '水肿（edema）是指人体组织间隙有过多的液体积聚使组织肿胀。全身性水肿常见于心源性、肾源性和肝源性水肿。' },
          { type: 'table', title: '三种全身性水肿的鉴别',
            headers: ['特点', '心源性水肿', '肾源性水肿', '肝源性水肿'],
            rows: [
              ['开始部位', '从下垂部位开始（脚踝）', '从眼睑、颜面开始', '从踝部开始'],
              ['发展速度', '缓慢', '发展迅速', '缓慢'],
              ['水肿性质', '较坚实，移动性小', '软而移动性大', '先为踝部水肿'],
              ['伴随表现', '心脏扩大、肝大、颈静脉怒张', '蛋白尿、血尿', '腹水、蜘蛛痣、肝掌']
            ]
          },
          { type: 'mnemonic', content: '📝 记忆口诀：心源下垂肾源眼，肝源先从踝部显；心伴肝大颈怒张，肾有蛋白尿改变。' }
        ]
      },
      {
        id: 'cough',
        title: '咳嗽与咳痰',
        summary: '咳嗽是呼吸道常见的防御反射。痰的性质、颜色和量对病因诊断有重要价值。',
        tags: ['咳嗽', '咳痰', '呼吸道'],
        sections: [
          { type: 'p', content: '咳嗽（cough）是呼吸道受到刺激后引起的反射性防御动作。咳痰（expectoration）是通过咳嗽将呼吸道分泌物排出口腔外的动作。' },
          { type: 'table', title: '不同痰的性质与临床意义',
            headers: ['痰的性质', '特点', '临床意义'],
            rows: [
              ['黏液性痰', '黏稠、无色或白色', '支气管炎、哮喘'],
              ['脓性痰', '黄色或绿色', '细菌感染、肺脓肿'],
              ['血性痰', '带血丝或血块', '肺结核、肺癌、支扩'],
              ['铁锈色痰', '铁锈色', '大叶性肺炎'],
              ['粉红色泡沫痰', '粉红色泡沫状', '急性肺水肿'],
              ['分层痰', '静置后分三层', '支气管扩张、肺脓肿']
            ]
          }
        ]
      },
      {
        id: 'dyspnea',
        title: '呼吸困难',
        summary: '呼吸困难是患者主观感觉空气不足，客观表现为呼吸用力。分为肺源性、心源性、中毒性等。',
        tags: ['呼吸困难', '端坐呼吸', '心源性哮喘'],
        sections: [
          { type: 'p', content: '呼吸困难（dyspnea）是指患者主观上感到空气不足，客观上表现为呼吸费力，严重时可出现鼻翼扇动、发绀、端坐呼吸。' },
          { type: 'table', title: '呼吸困难的分类',
            headers: ['类型', '特点', '常见疾病'],
            rows: [
              ['吸气性呼吸困难', '吸气困难，三凹征', '喉头水肿、喉痉挛、异物'],
              ['呼气性呼吸困难', '呼气费力，呼气延长', '支气管哮喘、COPD'],
              ['混合性呼吸困难', '吸气和呼气均困难', '重症肺炎、肺纤维化'],
              ['心源性呼吸困难', '端坐呼吸、夜间阵发性', '左心衰竭'],
              ['中毒性呼吸困难', '深大呼吸（Kussmaul）', '糖尿病酮症酸中毒']
            ]
          }
        ]
      },
      {
        id: 'cyanosis',
        title: '发绀',
        summary: '发绀是血液中还原血红蛋白增多（>50g/L）使皮肤黏膜呈青紫色。分为中心性和周围性。',
        tags: ['发绀', '青紫', '缺氧'],
        sections: [
          { type: 'p', content: '发绀（cyanosis）是指血液中还原血红蛋白增多使皮肤和黏膜呈青紫色改变的一种表现。当毛细血管中还原血红蛋白≥50g/L时出现发绀。' },
          { type: 'table', title: '中心性与周围性发绀的鉴别',
            headers: ['特点', '中心性发绀', '周围性发绀'],
            rows: [
              ['产生机制', 'SaO₂降低', '周围血流减慢'],
              ['发绀部位', '全身性（口唇、舌、躯干）', '肢体末端（手指、足趾）'],
              ['皮肤温度', '温暖', '冰冷'],
              ['按摩后', '无改变', '发绀减轻或消失'],
              ['常见疾病', '先心病、严重肺病', '右心衰、休克']
            ]
          }
        ]
      },
      {
        id: 'jaundice',
        title: '黄疸',
        summary: '黄疸是因胆红素升高导致皮肤、巩膜黄染。分为溶血性、肝细胞性和梗阻性三类。',
        tags: ['黄疸', '胆红素', '肝病'],
        sections: [
          { type: 'p', content: '黄疸（jaundice）是指血清中胆红素升高（>17.1μmol/L）致使皮肤、黏膜和巩膜发黄的症状和体征。' },
          { type: 'table', title: '三种黄疸的鉴别',
            headers: ['特点', '溶血性黄疸', '肝细胞性黄疸', '梗阻性黄疸'],
            rows: [
              ['皮肤颜色', '浅柠檬色', '浅黄至深黄', '暗黄、黄绿'],
              ['TBil', '升高', '升高', '升高'],
              ['DBil/TBil', '<20%', '20-50%', '>50%'],
              ['尿胆红素', '—', '+', '++'],
              ['尿胆原', '↑', '↑', '↓/消失'],
              ['ALT/AST', '正常', '明显升高', '轻中度升高'],
              ['粪色', '加深', '正常/变浅', '变浅/白陶土色']
            ]
          },
          { type: 'mnemonic', content: '📝 记忆口诀：溶血尿胆原高粪色深，肝细胞都高需区分；梗阻胆红素高便变浅，尿胆原消失粪如陶土。' }
        ]
      },
      {
        id: 'hematemesis',
        title: '呕血与便血',
        summary: '呕血是上消化道出血的表现，便血是下消化道或上消化道出血的表现。颜色取决于出血部位和量。',
        tags: ['呕血', '便血', '黑便', '消化道出血'],
        sections: [
          { type: 'p', content: '呕血（hematemesis）是上消化道疾病或全身性疾病所致急性上消化道出血，血液经口腔呕出。便血（hematochezia）是指消化道出血，血液经肛门排出。' },
          { type: 'table', title: '出血部位与临床表现',
            headers: ['出血部位', '表现', '常见原因'],
            rows: [
              ['食管', '呕血（鲜红）', '食管静脉曲张破裂'],
              ['胃/十二指肠', '呕血（咖啡色）或黑便', '消化性溃疡、胃癌'],
              ['空肠/回肠', '血便（暗红）', '克罗恩病、肿瘤'],
              ['结肠', '便血（暗红）', '结肠癌、溃疡性结肠炎'],
              ['直肠/肛管', '便血（鲜红，附着粪便表面）', '痔疮、直肠癌']
            ]
          }
        ]
      },
      {
        id: 'consciousness',
        title: '意识障碍',
        summary: '意识障碍是高级神经中枢功能受损的表现，包括嗜睡、意识模糊、昏睡、昏迷等不同程度。',
        tags: ['意识障碍', '昏迷', '嗜睡'],
        sections: [
          { type: 'p', content: '意识障碍（disturbance of consciousness）是指人体对自身和周围环境的感知及对外界刺激的反应能力发生障碍。按程度由轻到重分级。' },
          { type: 'table', title: '意识障碍的分级',
            headers: ['分级', '表现'],
            rows: [
              ['嗜睡', '最轻，持续睡眠，可被唤醒，能正确回答问题'],
              ['意识模糊', '时间地点人物定向力障碍，注意力减退'],
              ['昏睡', '强刺激可唤醒，答非所问，刺激停止即入睡'],
              ['浅昏迷', '对疼痛刺激有反应，无自发语言，反射存在'],
              ['中昏迷', '对强痛刺激有反应，反射减弱'],
              ['深昏迷', '对任何刺激无反应，反射消失，生命征不稳定']
            ]
          },
          { type: 'mnemonic', content: '📝 记忆口诀：嗜睡唤醒能答对，昏睡强刺激才回；浅昏痛有反应在，深昏全无命垂危。' }
        ]
      }
    ]
  },
  {
    id: 'physical',
    title: '体格检查',
    icon: '🩺',
    color: '#059669',
    cards: [
      {
        id: 'basic-exam',
        title: '基本检查法',
        summary: '体格检查的基本方法包括视诊、触诊、叩诊、听诊和嗅诊五大法。',
        tags: ['视诊', '触诊', '叩诊', '听诊', '嗅诊'],
        sections: [
          { type: 'p', content: '体格检查（physical examination）是医师运用自己的感官和借助简便工具对患者进行系统检查的方法。基本方法有五种：' },
          { type: 'table', title: '五种基本检查法',
            headers: ['方法', '定义', '注意事项'],
            rows: [
              ['视诊（Inspection）', '用视觉观察患者全身及局部表现', '自然光线充足，充分暴露'],
              ['触诊（Palpation）', '用手触觉感知检查部位', '手要温暖，力度适中'],
              ['叩诊（Percussion）', '用手指叩击体表，根据音响判断', '板指要紧贴体表'],
              ['听诊（Auscultation）', '听取体内发出的声音', '听诊器胸件要紧贴皮肤'],
              ['嗅诊（Olfaction）', '用嗅觉辨别患者气味', '注意特殊气味如肝臭、烂苹果味']
            ]
          }
        ]
      },
      {
        id: 'vital-signs',
        title: '生命征',
        summary: '生命征是评估生命状态的重要指标，包括体温、脉搏、呼吸和血压。',
        tags: ['生命征', '体温', '脉搏', '呼吸', '血压'],
        sections: [
          { type: 'p', content: '生命征（vital signs）是评价生命活动存在与否及其质量的指标，包括体温（T）、脉搏（P）、呼吸（R）、血压（BP）。' },
          { type: 'table', title: '生命征正常范围',
            headers: ['指标', '正常范围'],
            rows: [
              ['体温（腋测法）', '36~37°C'],
              ['脉搏', '60~100次/分'],
              ['呼吸', '12~20次/分'],
              ['血压（收缩压/舒张压）', '90~139/60~89mmHg']
            ]
          }
        ]
      },
      {
        id: 'skin-exam',
        title: '皮肤检查',
        summary: '皮肤检查包括颜色、湿度、弹性、皮疹、出血点、蜘蛛痣等。',
        tags: ['皮肤', '皮疹', '蜘蛛痣', '弹性'],
        sections: [
          { type: 'p', content: '皮肤检查通过视诊和触诊进行，注意全身皮肤的颜色、湿度、弹性、有无皮疹、出血点、蜘蛛痣、肝掌等改变。' },
          { type: 'table', title: '常见皮肤改变及临床意义',
            headers: ['改变', '表现', '临床意义'],
            rows: [
              ['蜘蛛痣', '中心红点辐射出细小血管', '肝病、雌激素增多'],
              ['肝掌', '大小鱼际片状红斑', '慢性肝病'],
              ['黄染', '皮肤巩膜发黄', '黄疸'],
              ['紫癜', '皮下出血点>3mm', '凝血障碍、血小板减少'],
              ['荨麻疹', '风团', '过敏反应']
            ]
          }
        ]
      },
      {
        id: 'lymph-node',
        title: '淋巴结检查',
        summary: '淋巴结检查采用触诊法，按一定顺序进行。正常淋巴结不易触及，肿大时需注意部位、大小、质地等。',
        tags: ['淋巴结', '肿大', '触诊'],
        sections: [
          { type: 'p', content: '淋巴结（lymph nodes）检查一般采用触诊，按头颈部、上肢、下肢的顺序进行。正常淋巴结直径0.2~0.5cm，质软、光滑、无压痛。' },
          { type: 'table', title: '淋巴结肿大的鉴别',
            headers: ['特点', '良性肿大', '恶性肿大'],
            rows: [
              ['质地', '柔软、中等', '坚硬如石或橡皮感'],
              ['活动度', '活动好', '固定或活动差'],
              ['压痛', '有压痛', '无压痛'],
              ['融合', '无融合', '可融合成团'],
              ['常见疾病', '炎症、结核', '淋巴瘤、转移癌']
            ]
          }
        ]
      },
      {
        id: 'chest-exam',
        title: '胸部检查',
        summary: '胸部检查包括胸廓外形、肺和胸膜的视诊、触诊、叩诊和听诊。',
        tags: ['胸部', '肺', '胸膜', '呼吸音'],
        sections: [
          { type: 'p', content: '胸部检查是体格检查的重要组成部分，内容包括胸廓外形、肺和胸膜的检查。听诊是胸部检查中最重要的一步。' },
          { type: 'table', title: '正常呼吸音及特点',
            headers: ['呼吸音', '特点', '听诊部位'],
            rows: [
              ['支气管呼吸音', '音强、高调，吸：呼=1：3', '喉部、胸骨上窝'],
              ['肺泡呼吸音', '柔和吹风样，吸：呼=3：1', '大部分肺野'],
              ['支气管肺泡呼吸音', '二者混合', '胸骨角、肩胛间区']
            ]
          },
          { type: 'table', title: '常见啰音及临床意义',
            headers: ['啰音类型', '产生机制', '听诊特点', '常见疾病'],
            rows: [
              ['湿啰音', '气道内稀薄液体', '断续、短暂，吸气末明显', '肺炎、肺水肿、支扩'],
              ['干啰音', '气道狭窄或痉挛', '音乐性，呼气相明显', '支气管哮喘、COPD'],
              ['捻发音', '细支气管壁粘合', '极细碎，似捻发', '肺炎早期、肺淤血']
            ]
          }
        ]
      },
      {
        id: 'heart-exam',
        title: '心脏检查',
        summary: '心脏检查包括视诊心前区隆起、触诊心尖搏动、叩诊心界和听诊心音、心脏杂音。',
        tags: ['心脏', '心音', '杂音', '心界'],
        sections: [
          { type: 'p', content: '心脏检查是心血管疾病诊断的基础。听诊是心脏检查最重要的方法，包括心率、心律、心音、额外心音、杂音和心包摩擦音。' },
          { type: 'table', title: '心音组成及临床意义',
            headers: ['心音', '产生机制', '特点', '异常意义'],
            rows: [
              ['S₁（第一心音）', '二尖瓣、三尖瓣关闭', '音调低，心尖部最响', '增强（二尖瓣狭窄），减弱（心衰）'],
              ['S₂（第二心音）', '主动脉瓣、肺动脉瓣关闭', '音调高，心底部最响', '分裂（房间隔缺损）'],
              ['S₃（第三心音）', '心室快速充盈期', '低频，儿童可见', '病理S₃＝奔马律（心衰）'],
              ['S₄（第四心音）', '心房收缩', '低频，不易听到', '病理S₄（心肌肥厚）']
            ]
          },
          { type: 'table', title: '心脏杂音分级（Levine 6级）',
            headers: ['级别', '特点'],
            rows: [
              ['1级', '最轻，需仔细听才能发现'],
              ['2级', '轻度，较易听到'],
              ['3级', '中度，明显但无震颤'],
              ['4级', '响亮，伴震颤'],
              ['5级', '非常响亮，听诊器边缘接触皮肤即可听到'],
              ['6级', '极响亮，听诊器离开皮肤也能听到']
            ]
          }
        ]
      },
      {
        id: 'abdomen-exam',
        title: '腹部检查',
        summary: '腹部检查按视、听、叩、触顺序进行。触诊是腹部的重点检查方法。',
        tags: ['腹部', '触诊', '肝脾', '压痛'],
        sections: [
          { type: 'p', content: '腹部检查顺序为视→听→叩→触（注意先听诊后触诊，避免影响肠鸣音）。' },
          { type: 'table', title: '腹部常见体征及意义',
            headers: ['体征', '检查方法', '临床意义'],
            rows: [
              ['腹壁紧张', '触诊腹壁硬度', '腹膜炎（板状腹）'],
              ['压痛/反跳痛', '触诊后突然抬手', '腹膜刺激征'],
              ['Murphy征', '胆囊点触诊深吸气', '胆囊炎'],
              ['McBurney点压痛', '脐与右髂前上棘连线中外1/3', '阑尾炎'],
              ['肝大', '肝区触诊', '肝炎、肝硬化、肝癌'],
              ['脾大', '脾区触诊', '门脉高压、血液病'],
              ['移动性浊音', '叩诊', '腹水（>1000ml）']
            ]
          }
        ]
      },
      {
        id: 'neuro-exam',
        title: '神经系统检查',
        summary: '神经系统检查包括脑神经、运动功能、感觉功能、反射和病理征检查。',
        tags: ['神经', '反射', '病理征', '脑膜刺激征'],
        sections: [
          { type: 'p', content: '神经系统检查内容包括脑神经检查、运动系统（肌力、肌张力、共济运动）、感觉系统、反射检查（深反射、浅反射）和病理征。' },
          { type: 'table', title: '常见病理征',
            headers: ['名称', '检查方法', '阳性表现', '临床意义'],
            rows: [
              ['Babinski征', '划足底外侧', '𧿹趾背伸，其余扇形展开', '上运动神经元损伤'],
              ['Oppenheim征', '推胫骨前缘', '同Babinski', '上运动神经元损伤'],
              ['Gordon征', '捏腓肠肌', '同Babinski', '上运动神经元损伤'],
              ['颈强直', '被动屈颈', '颈部抵抗', '脑膜刺激征'],
              ['Kernig征', '屈髋伸膝', '抵抗或疼痛', '脑膜刺激征'],
              ['Brudzinski征', '被动屈颈', '双下肢屈曲', '脑膜刺激征']
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'lab',
    title: '实验室检查',
    icon: '🔬',
    color: '#dc2626',
    cards: [
      {
        id: 'blood-routine',
        title: '血常规',
        summary: '血常规是最基础的血液检查，包括红细胞、血红蛋白、白细胞和血小板计数。',
        tags: ['血常规', '红细胞', '白细胞', '血红蛋白', '血小板'],
        sections: [
          { type: 'p', content: '血常规（blood routine test）是临床最基础的实验室检查之一，包括红细胞（RBC）、血红蛋白（Hb）、白细胞（WBC）及分类、血小板（PLT）等指标。' },
          { type: 'table', title: '血常规正常参考值',
            headers: ['指标', '正常参考值', '临床意义'],
            rows: [
              ['RBC（男）', '4.0~5.5×10¹²/L', '↑：真性红细胞增多症；↓：贫血'],
              ['RBC（女）', '3.5~5.0×10¹²/L', '同上'],
              ['Hb（男）', '120~160g/L', '同上'],
              ['Hb（女）', '110~150g/L', '同上'],
              ['WBC', '3.5~9.5×10⁹/L', '↑：感染、炎症、白血病；↓：病毒感染、再障'],
              ['N（中性粒细胞）', '40~75%', '↑：细菌感染；↓：病毒感染'],
              ['L（淋巴细胞）', '20~50%', '↑：病毒感染、结核；↓：免疫缺陷'],
              ['PLT', '125~350×10⁹/L', '↑：血小板增多症；↓：血小板减少性紫癜']
            ]
          }
        ]
      },
      {
        id: 'urine-routine',
        title: '尿常规',
        summary: '尿常规检查包括尿液的理化性质、化学成分和沉渣镜检。',
        tags: ['尿常规', '蛋白尿', '血尿', '尿沉渣'],
        sections: [
          { type: 'p', content: '尿常规（urinalysis）是泌尿系统疾病诊断的重要检查，包括一般性状、化学检查和尿沉渣显微镜检查。' },
          { type: 'table', title: '尿常规主要指标及意义',
            headers: ['指标', '正常', '异常意义'],
            rows: [
              ['pH', '4.6~8.0', '↓：酸中毒；↑：碱中毒'],
              ['SG（比重）', '1.015~1.025', '固定低比重→肾衰竭'],
              ['PRO（蛋白）', '—', '蛋白尿→肾炎、肾病综合征'],
              ['GLU（葡萄糖）', '—', '糖尿病'],
              ['KET（酮体）', '—', '糖尿病酮症酸中毒'],
              ['RBC', '0~3/HPF', '血尿→结石、感染、肿瘤'],
              ['WBC', '0~5/HPF', '白细胞尿→泌尿系感染'],
              ['CAST（管型）', '—', '肾小管损伤']
            ]
          }
        ]
      },
      {
        id: 'liver-function',
        title: '肝功能检查',
        summary: '肝功能检查包括酶学、胆红素代谢、蛋白质合成功能等指标。',
        tags: ['肝功能', '转氨酶', '胆红素', 'ALT', 'AST'],
        sections: [
          { type: 'p', content: '肝功能检查（liver function tests）用于评估肝脏的代谢、合成、解毒功能，包括酶学检查、胆红素代谢、蛋白质代谢等。' },
          { type: 'table', title: '常用肝功能指标',
            headers: ['指标', '正常参考值', '临床意义'],
            rows: [
              ['ALT', '10~40U/L', '↑：肝细胞损伤（肝炎）'],
              ['AST', '10~40U/L', '↑：肝损伤、心肌梗死'],
              ['ALT/AST（De Ritis比值）', '>1', '<1提示重症肝炎、肝硬化'],
              ['ALP（碱性磷酸酶）', '40~150U/L', '↑：梗阻性黄疸、骨病'],
              ['GGT（γ-谷氨酰转肽酶）', '10~60U/L', '↑：胆道疾病、酒精性肝病'],
              ['TBil（总胆红素）', '3.4~17.1μmol/L', '↑：黄疸'],
              ['DBil（直接胆红素）', '0~6.8μmol/L', '↑：梗阻性黄疸'],
              ['TP（总蛋白）', '60~80g/L', '↓：肝病、营养不良'],
              ['ALB（白蛋白）', '35~55g/L', '↓：慢性肝病']
            ]
          }
        ]
      },
      {
        id: 'renal-function',
        title: '肾功能检查',
        summary: '肾功能检查包括肾小球滤过功能和肾小管重吸收功能。',
        tags: ['肾功能', '肌酐', '尿素氮', 'eGFR'],
        sections: [
          { type: 'p', content: '肾功能检查（renal function tests）包括肾小球滤过功能和肾小管重吸收功能检查。' },
          { type: 'table', title: '常用肾功能指标',
            headers: ['指标', '正常参考值', '临床意义'],
            rows: [
              ['Cr（肌酐）', '44~133μmol/L', '↑：肾功能不全'],
              ['BUN（尿素氮）', '3.2~7.1mmol/L', '↑：肾前性/肾性/肾后性'],
              ['UA（尿酸）', '150~420μmol/L', '↑：痛风、肾病'],
              ['eGFR（估算肾小球滤过率）', '≥90ml/min', '<90：肾功能下降'],
              ['Ccr（肌酐清除率）', '80~120ml/min', '反映肾小球滤过功能']
            ]
          }
        ]
      },
      {
        id: 'blood-glucose',
        title: '血糖与血脂',
        summary: '血糖和血脂是代谢性疾病的重要监测指标。',
        tags: ['血糖', '血脂', '糖尿病', '胆固醇'],
        sections: [
          { type: 'p', content: '血糖和血脂检查是临床常用的生化检查，对诊断糖尿病、高脂血症等代谢性疾病有重要价值。' },
          { type: 'table', title: '血糖与血脂参考值',
            headers: ['指标', '正常参考值', '临床意义'],
            rows: [
              ['FBG（空腹血糖）', '3.9~6.1mmol/L', '↑：糖尿病；↓：低血糖'],
              ['2hPBG（餐后2h血糖）', '<7.8mmol/L', '≥11.1→糖尿病'],
              ['HbA1c（糖化血红蛋白）', '4~6%', '反映2~3个月血糖水平'],
              ['TC（总胆固醇）', '<5.2mmol/L', '↑：动脉粥样硬化风险'],
              ['TG（甘油三酯）', '<1.7mmol/L', '↑：高脂血症、胰腺炎风险'],
              ['LDL-C', '<3.4mmol/L', '↑：动脉粥样硬化（坏胆固醇）'],
              ['HDL-C', '>1.0mmol/L', '↓：心血管疾病风险（好胆固醇）']
            ]
          }
        ]
      },
      {
        id: 'cardiac-enzymes',
        title: '心肌酶谱',
        summary: '心肌酶谱用于诊断急性心肌梗死和心肌损伤。',
        tags: ['心肌酶', '心肌梗死', 'CK', 'TnI', 'TnT'],
        sections: [
          { type: 'p', content: '心肌酶谱（cardiac enzymes）是诊断急性心肌梗死（AMI）和评估心肌损伤的重要实验室指标。' },
          { type: 'table', title: '心肌酶谱指标及时间窗',
            headers: ['指标', '开始升高', '达峰时间', '恢复正常', '特点'],
            rows: [
              ['CK（肌酸激酶）', '4~6h', '24h', '3~4天', '敏感性较高，特异性一般'],
              ['CK-MB', '3~4h', '16~24h', '2~3天', '对AMI较特异'],
              ['cTnI（肌钙蛋白I）', '3~6h', '15~24h', '7~14天', '高敏感性、高特异性'],
              ['cTnT（肌钙蛋白T）', '3~6h', '10~24h', '10~15天', '同上'],
              ['LDH（乳酸脱氢酶）', '8~12h', '24~48h', '7~14天', '特异性较差'],
              ['AST', '6~12h', '24~48h', '3~6天', '不特异']
            ]
          },
          { type: 'mnemonic', content: '📝 记忆口诀：肌钙蛋白最特异，CK-MB也可靠；TnI持续一周多，TnT十天还不落。' }
        ]
      },
      {
        id: 'blood-gas',
        title: '动脉血气分析',
        summary: '血气分析评估呼吸功能和酸碱平衡状态，包括pH、PaO₂、PaCO₂、HCO₃⁻等指标。',
        tags: ['血气分析', '酸碱平衡', '呼吸衰竭', 'pH'],
        sections: [
          { type: 'p', content: '动脉血气分析（arterial blood gas analysis）是评估呼吸功能和酸碱平衡状态的常用方法。' },
          { type: 'table', title: '血气分析主要指标',
            headers: ['指标', '正常参考值', '临床意义'],
            rows: [
              ['pH', '7.35~7.45', '<7.35：酸中毒；>7.45：碱中毒'],
              ['PaO₂', '80~100mmHg', '<60mmHg：呼吸衰竭'],
              ['PaCO₂', '35~45mmHg', '>50：Ⅱ型呼衰；<35：过度通气'],
              ['HCO₃⁻', '22~27mmol/L', '代谢性指标'],
              ['BE（碱剩余）', '±3mmol/L', '代酸时负值增大'],
              ['SaO₂', '95~100%', '<90%：低氧血症']
            ]
          }
        ]
      },
      {
        id: 'tumor-markers',
        title: '肿瘤标志物',
        summary: '肿瘤标志物是肿瘤细胞产生或机体对肿瘤反应产生的物质，用于辅助诊断和监测疗效。',
        tags: ['肿瘤标志物', 'AFP', 'CEA', 'CA系列'],
        sections: [
          { type: 'p', content: '肿瘤标志物（tumor markers）存在于肿瘤患者的组织、体液和排泄物中，用于肿瘤的辅助诊断、疗效监测和预后评估。' },
          { type: 'table', title: '常见肿瘤标志物及其临床意义',
            headers: ['标志物', '相关肿瘤', '备注'],
            rows: [
              ['AFP（甲胎蛋白）', '原发性肝癌', '>400ng/ml有诊断意义'],
              ['CEA（癌胚抗原）', '结直肠癌、胃癌、肺癌', '广谱肿瘤标志物'],
              ['CA19-9', '胰腺癌、胆管癌', '胰腺癌敏感性高'],
              ['CA125', '卵巢癌', '浆液性卵巢癌标志物'],
              ['PSA（前列腺特异性抗原）', '前列腺癌', 'fPSA/tPSA比值有助鉴别'],
              ['CA15-3', '乳腺癌', '主要用于疗效监测'],
              ['NSE', '小细胞肺癌', '神经内分泌肿瘤']
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'ecg',
    title: '心电图',
    icon: '💓',
    color: '#7c3aed',
    cards: [
      {
        id: 'normal-ecg',
        title: '正常心电图',
        summary: '正常心电图由P波、QRS波群、T波、U波组成，各波有正常范围和形态。',
        tags: ['正常心电图', 'P波', 'QRS', 'T波', 'ST段'],
        sections: [
          { type: 'p', content: '心电图（electrocardiogram, ECG）是记录心脏电活动的检查方法。正常心电图由P波、PR段、QRS波群、ST段、T波和U波组成。' },
          { type: 'table', title: '正常心电图各波段正常值',
            headers: ['波段', '正常范围', '异常意义'],
            rows: [
              ['P波', '时限<0.12s，振幅<0.25mV', '宽大→左房大；高尖→右房大'],
              ['PR间期', '0.12~0.20s', '延长→房室传导阻滞'],
              ['QRS波群', '时限0.06~0.10s，振幅≥0.5mV', '增宽→室内传导阻滞'],
              ['ST段', '抬高<0.1mV（肢导），压低<0.05mV', '抬高→心梗；压低→心肌缺血'],
              ['T波', '与QRS主波方向一致', '倒置→心肌缺血'],
              ['QT间期', '<0.44s（心率60次/分时）', '延长→心律失常风险'],
              ['U波', 'T波后，低振幅', '明显U波→低钾血症']
            ]
          }
        ]
      },
      {
        id: 'hypertrophy',
        title: '心房与心室肥厚',
        summary: '心房和心室肥厚时，心电图出现相应导联的波幅增高、时限延长。',
        tags: ['心房肥大', '心室肥厚', 'P波', '电轴'],
        sections: [
          { type: 'p', content: '心房和心室肥厚属于心脏扩大和室壁增厚在心电图上的表现，通常表现为相应导联波幅增高、时限延长及电轴偏移。' },
          { type: 'table', title: '房室肥厚的ECG表现',
            headers: ['类型', 'ECG表现'],
            rows: [
              ['左房肥大（二尖瓣P波）', 'P波双峰，时限≥0.12s，Ⅱ、Ⅲ、aVF导联明显'],
              ['右房肥大（肺性P波）', 'P波高尖，振幅≥0.25mV，Ⅱ、Ⅲ、aVF导联'],
              ['左室肥厚', 'RV₅+SV₁>4.0mV（男）>3.5mV（女）电轴左偏，ST-T改变'],
              ['右室肥厚', 'V₁导联R/S≥1，RV₁+SV₅>1.05mV，电轴右偏']
            ]
          }
        ]
      },
      {
        id: 'ischemia',
        title: '心肌缺血与心肌梗死',
        summary: '心肌缺血表现为ST段压低或T波倒置，心肌梗死有典型的ST段抬高和病理性Q波演变。',
        tags: ['心肌缺血', '心肌梗死', 'ST段', '病理性Q波'],
        sections: [
          { type: 'p', content: '心肌缺血（myocardial ischemia）和心肌梗死（myocardial infarction, MI）是冠状动脉粥样硬化性心脏病的严重表现。心电图是诊断的重要工具。' },
          { type: 'table', title: '急性心肌梗死的ECG演变',
            headers: ['分期', '时间', 'ECG表现'],
            rows: [
              ['超急性期', '数分钟~数小时', 'ST段斜直向上抬高，T波高耸'],
              ['急性期', '数小时~数天', 'ST段抬高，出现病理性Q波，T波倒置'],
              ['亚急性期', '数天~数周', 'ST段逐渐回落，T波倒置加深'],
              ['陈旧期', '数周~数月后', '病理性Q波持续，ST-T恢复正常']
            ]
          },
          { type: 'table', title: '心肌梗死定位',
            headers: ['梗死部位', 'ECG导联'],
            rows: [
              ['前间壁', 'V₁、V₂、V₃'],
              ['前壁', 'V₃、V₄、V₅'],
              ['广泛前壁', 'V₁~V₆'],
              ['下壁', 'Ⅱ、Ⅲ、aVF'],
              ['侧壁', 'Ⅰ、aVL、V₅、V₆'],
              ['后壁', 'V₇、V₈、V₉（V₁、V₂ R波增高）']
            ]
          }
        ]
      },
      {
        id: 'arrhythmia',
        title: '心律失常',
        summary: '心律失常包括窦性、房性、室性心律失常，ECG是诊断的金标准。',
        tags: ['心律失常', '房颤', '室早', '室速', '心动过速'],
        sections: [
          { type: 'p', content: '心律失常（arrhythmia）是指心脏冲动的频率、节律、起源部位、传导速度或激动次序的异常。' },
          { type: 'table', title: '常见心律失常的ECG特点',
            headers: ['类型', 'ECG特点'],
            rows: [
              ['窦性心动过速', 'P波正常，频率>100次/分'],
              ['窦性心动过缓', 'P波正常，频率<60次/分'],
              ['房性期前收缩（房早）', '提前出现P\'波，形态异常，P\'R>0.12s，代偿间歇不完全'],
              ['心房颤动（房颤）', 'P波消失代以f波（350~600次/分），RR间期绝对不等'],
              ['心房扑动（房扑）', 'P波消失代以F波（250~350次/分），锯齿状'],
              ['室性期前收缩（室早）', '提前出现宽大畸形QRS（>0.12s），T波与QRS方向相反，代偿完全'],
              ['室性心动过速（室速）', '连续≥3个室早，频率140~200次/分，房室分离'],
              ['心室颤动（室颤）', 'QRS-T消失，代以不规则颤动波']
            ]
          }
        ]
      },
      {
        id: 'conduction-block',
        title: '传导阻滞',
        summary: '传导阻滞包括窦房、房室和室内传导阻滞，PR间期延长或QRS增宽是主要表现。',
        tags: ['传导阻滞', '房室传导阻滞', '束支传导阻滞', 'PR间期'],
        sections: [
          { type: 'p', content: '传导阻滞（conduction block）是指心脏冲动传导过程中发生障碍，包括窦房传导阻滞、房内传导阻滞、房室传导阻滞和室内传导阻滞。' },
          { type: 'table', title: '房室传导阻滞（AVB）分度',
            headers: ['分度', 'ECG表现'],
            rows: [
              ['Ⅰ度AVB', 'PR间期>0.20s，每个P波后均有QRS'],
              ['Ⅱ度Ⅰ型AVB（文氏）', 'PR间期逐渐延长，直至一个QRS脱落，周而复始'],
              ['Ⅱ度Ⅱ型AVB', 'PR间期固定，间歇性QRS脱落'],
              ['Ⅲ度AVB（完全性）', 'P波与QRS完全无关，房率>室率']
            ]
          }
        ]
      },
      {
        id: 'electrolyte-ecg',
        title: '电解质紊乱对ECG的影响',
        summary: '血钾和血钙异常会影响心肌细胞电生理，在心电图上出现特征性改变。',
        tags: ['电解质', '高钾血症', '低钾血症', '高钙', '低钙'],
        sections: [
          { type: 'p', content: '血钾和血钙是影响心电图最常见的电解质。不同电解质紊乱在心电图上有特征性表现，可作为早期诊断线索。' },
          { type: 'table', title: '电解质紊乱的ECG表现',
            headers: ['类型', 'ECG表现'],
            rows: [
              ['高钾血症（K⁺>5.5）', 'T波高尖（帐篷样），基底变窄→QRS增宽→P波消失→正弦波→室颤/停搏'],
              ['低钾血症（K⁺<3.5）', 'U波明显，T波低平/倒置，ST段压低，出现室早/室速'],
              ['高钙血症', 'ST段缩短或消失，QT间期缩短'],
              ['低钙血症', 'ST段延长，QT间期延长']
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'imaging',
    title: '影像学检查',
    icon: '🩻',
    color: '#0891b2',
    cards: [
      {
        id: 'xray',
        title: 'X线成像',
        summary: 'X线是最基本的影像学检查，利用不同组织对X线吸收差异成像。',
        tags: ['X线', '放射', '胸片', '透视'],
        sections: [
          { type: 'p', content: 'X线成像（X-ray imaging）利用X线的穿透性、荧光效应和感光效应，以及人体不同组织对X线吸收的差异进行成像。' },
          { type: 'table', title: 'X线的基本影像特点',
            headers: ['组织密度', 'X线密度', '影像颜色'],
            rows: [
              ['骨骼/钙化', '高密度', '白色'],
              ['软组织/液体', '中等密度', '灰白色'],
              ['脂肪', '低密度', '灰黑色'],
              ['气体', '极低密度', '黑色']
            ]
          },
          { type: 'p', content: 'X线的优缺点：价格低廉、辐射较低、空间分辨率高，但对软组织分辨力差，有重叠效应。常用于胸部（肺炎、结核、肺癌）、骨骼（骨折、关节炎）、腹部（肠梗阻）检查。' }
        ]
      },
      {
        id: 'ct',
        title: 'CT检查',
        summary: 'CT利用X线对断层扫描，经计算机重建图像，软组织分辨率显著优于X线。',
        tags: ['CT', '断层', '增强扫描'],
        sections: [
          { type: 'p', content: 'CT（Computed Tomography）即计算机断层扫描，利用X线对人体层面进行扫描，经计算机重建获得断层面图像。CT的密度分辨率明显高于X线。' },
          { type: 'table', title: '常见CT检查及适应症',
            headers: ['检查部位', '常见适应症'],
            rows: [
              ['头颅CT', '脑出血、脑梗死、颅脑外伤、颅内肿瘤'],
              ['胸部CT', '肺部小结节、肺癌分期、肺栓塞（CTA）'],
              ['腹部CT', '肝胰腺肿瘤、肾结石、腹部外伤'],
              ['脊柱CT', '椎间盘突出、椎管狭窄、脊柱骨折'],
              ['冠状动脉CTA', '冠心病筛查、冠脉狭窄评估']
            ]
          }
        ]
      },
      {
        id: 'mri',
        title: 'MRI检查',
        summary: 'MRI利用强磁场和射频脉冲成像，对软组织结构显示最佳，无电离辐射。',
        tags: ['MRI', '磁共振', '软组织'],
        sections: [
          { type: 'p', content: 'MRI（Magnetic Resonance Imaging）即磁共振成像，利用强外磁场中人体氢原子核在射频脉冲激发后产生的信号进行成像。' },
          { type: 'table', title: 'MRI常见序列及信号特点',
            headers: ['序列', 'T1WI', 'T2WI', '主要用途'],
            rows: [
              ['水（脑脊液等）', '低信号（黑）', '高信号（白）', '区分病变与水肿'],
              ['脂肪', '高信号（白）', '高信号（白）', '显示解剖结构'],
              ['急性出血', '等/低信号', '低信号', '鉴别出血时间'],
              ['肿瘤', '低信号', '高信号', '肿瘤定位定性'],
              ['增强扫描（Gd-DTPA）', '强化区高信号', '—', '鉴别肿瘤活性']
            ]
          },
          { type: 'p', content: 'MRI的禁忌症：体内有铁磁性金属植入物（如起搏器、动脉瘤夹等）、幽闭恐惧症。MRI对中枢神经系统、脊柱、关节软组织和腹部脏器的检查优势明显。' }
        ]
      },
      {
        id: 'ultrasound',
        title: '超声检查',
        summary: '超声利用超声波反射成像，无创无辐射，是腹部和心脏检查的首选。',
        tags: ['超声', 'B超', '彩超', '多普勒'],
        sections: [
          { type: 'p', content: '超声检查（ultrasonography）利用超声波在人体组织中传播时的反射回波进行成像，具有无创、无辐射、实时、可重复等优点。' },
          { type: 'table', title: '超声检查常见应用',
            headers: ['类型', '用途', '特点'],
            rows: [
              ['腹部超声', '肝、胆、胰、脾、肾检查', '最常用，无创便捷'],
              ['心脏超声（UCG）', '心脏结构、功能、瓣膜', '可评估射血分数'],
              ['血管超声', '颈动脉、下肢血管', '多普勒显示血流'],
              ['产科超声', '胎儿检查', '安全无辐射'],
              ['浅表超声', '甲状腺、乳腺', '高频探头分辨率高']
            ]
          }
        ]
      },
      {
        id: 'imaging-choice',
        title: '各系统影像学检查选择',
        summary: '不同系统和疾病应选择最合适的影像学检查方法。',
        tags: ['影像选择', '检查策略', '诊断路径'],
        sections: [
          { type: 'p', content: '合理选择影像学检查方法，遵循"性价比最优、辐射最低、诊断最准"的原则。' },
          { type: 'table', title: '常见疾病的影像学选择',
            headers: ['疾病/系统', '首选检查', '次选/补充'],
            rows: [
              ['颅脑外伤', 'CT', 'X线（仅筛查骨折）'],
              ['脑出血（急性）', 'CT', 'MRI'],
              ['脑梗死', 'CT（排除出血）→MRI', 'MRI+DWI'],
              ['肺部炎症', 'X线胸片', 'CT'],
              ['肺小结节', 'CT（薄层）', 'PET-CT'],
              ['乳腺筛查', '超声（<40岁）/钼靶（≥40岁）', 'MRI'],
              ['肝血管瘤', '超声', 'CT增强/MRI'],
              ['胆结石', '超声', 'CT/MRCP'],
              ['肾结石', 'CT（平扫）', '超声'],
              ['前列腺癌', 'MRI', 'PET-CT'],
              ['骨折（四肢）', 'X线', 'CT（复杂骨折）']
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'reasoning',
    title: '诊断思维',
    icon: '🧠',
    color: '#d97706',
    cards: [
      {
        id: 'diagnosis-steps',
        title: '诊断步骤',
        summary: '诊断过程包括收集资料、分析综合、形成假设和验证诊断四个基本步骤。',
        tags: ['诊断步骤', '临床思维'],
        sections: [
          { type: 'p', content: '临床诊断是一个从现象到本质、从感性到理性的认识过程，通常包括以下步骤：' },
          { type: 'table', title: '诊断的基本步骤',
            headers: ['步骤', '内容', '要点'],
            rows: [
              ['第一步：收集资料', '采集病史、体格检查、辅助检查', '全面、客观、准确'],
              ['第二步：分析综合', '整理资料，发现主要问题', '去粗取精、由表及里'],
              ['第三步：形成假设', '提出初步诊断（印象诊断）', '穷尽可能性，列出鉴别诊断'],
              ['第四步：验证诊断', '补充检查、观察疗效', '动态修正，直至确诊']
            ]
          }
        ]
      },
      {
        id: 'diagnosis-principles',
        title: '诊断原则',
        summary: '诊断应遵循一元论原则、先常见后罕见原则、先器质后功能原则等。',
        tags: ['诊断原则', '一元论', '鉴别诊断'],
        sections: [
          { type: 'p', content: '临床诊断过程中应遵循以下基本原则，以避免误诊和漏诊：' },
          { type: 'table', title: '诊断基本原则',
            headers: ['原则', '说明'],
            rows: [
              ['一元论原则', '尽量用一个疾病解释全部临床表现，不能用时才考虑多病并存'],
              ['先常见后罕见', '优先考虑发病率高的常见病、多发病'],
              ['先器质后功能', '优先排除器质性疾病，再考虑功能性障碍'],
              ['先可治后难治', '优先考虑可治愈的疾病，以免错过治疗时机'],
              ['动态观察原则', '诊断不是一成不变的，应随病情变化及时修正']
            ]
          }
        ]
      },
      {
        id: 'differential-diagnosis',
        title: '鉴别诊断方法',
        summary: '鉴别诊断是排除其他可能疾病、确立最终诊断的关键思维过程。',
        tags: ['鉴别诊断', '排除法', '诊断思维'],
        sections: [
          { type: 'p', content: '鉴别诊断（differential diagnosis）是临床诊断的核心环节，通过比较和排除，确定最可能的诊断。' },
          { type: 'table', title: '常用鉴别诊断方法',
            headers: ['方法', '应用', '示例'],
            rows: [
              ['排除诊断法', '逐一排除可能性较小的疾病', '发热待查：逐一排除感染、肿瘤、结缔组织病'],
              ['类比诊断法', '与典型病例比较，找出共性和差异', '胸痛患者：与心绞痛、肺栓塞的典型表现比较'],
              ['治疗诊断法', '通过治疗反应验证诊断', '怀疑疟疾→抗疟治疗后热退→支持诊断'],
              ['概率诊断法', '根据疾病概率优先考虑', '年轻人胸痛→优先考虑气胸而非心梗']
            ]
          }
        ]
      },
      {
        id: 'clinical-reasoning',
        title: '临床诊断的内容',
        summary: '完整临床诊断包括病因诊断、病理诊断、功能诊断和并发症诊断。',
        tags: ['临床诊断', '病因诊断', '病理诊断', '合并症'],
        sections: [
          { type: 'p', content: '一个完整的临床诊断应反映疾病的本质和全貌，通常包括以下几个部分：' },
          { type: 'table', title: '诊断的组成',
            headers: ['诊断类型', '内容', '示例'],
            rows: [
              ['病因诊断', '疾病的根本原因', '冠状动脉粥样硬化性心脏病'],
              ['病理解剖诊断', '病变部位、范围、性质', '急性广泛前壁心肌梗死'],
              ['病理生理诊断', '功能状态改变', '心功能Ⅲ级（NYHA分级）'],
              ['并发症', '原发病引起的其他病变', '室性心动过速'],
              ['合并症', '与主病无关的并存疾病', '2型糖尿病']
            ]
          },
          { type: 'mnemonic', content: '📝 记忆口诀：诊断写出四部分，病因病理和功能；并发症和合并症，完整诊断不漏空。' }
        ]
      },
      {
        id: 'common-mistakes',
        title: '常见诊断误区',
        summary: '识别和避免常见的临床诊断思维误区，有助于提高诊断正确率。',
        tags: ['诊断误区', '误诊', '思维定势'],
        sections: [
          { type: 'p', content: '了解常见的诊断思维误区，有助于临床医师自觉避免，提高诊断的准确性和全面性。' },
          { type: 'table', title: '常见诊断误区及对策',
            headers: ['误区', '表现', '对策'],
            rows: [
              ['锚定效应', '过早下结论，忽视后续信息', '始终保持开放思维，不断修正'],
              ['确认偏倚', '只寻找支持自己假设的证据', '主动寻找不支持诊断的证据'],
              ['可得性启发', '最近见过的病容易想到', '系统进行鉴别诊断'],
              ['三盲状态', '盲从既往诊断、权威、先进设备', '独立分析，合理利用辅助检查'],
              ['遗漏综合征', '检查越多越安全', '有的放矢，遵循诊疗规范']
            ]
          }
        ]
      }
    ]
  }
];

/* ===== APP ===== */
const App = {
  currentModule: null,
  favorites: JSON.parse(localStorage.getItem('diagFav') || '[]'),
  studied: JSON.parse(localStorage.getItem('diagStudied') || '[]'),

  init() {
    this.bindEvents();
    this.renderWelcome();
    this.loadTheme();
    this.updateFavBadge();

    // Hash navigation
    if (location.hash) {
      const moduleId = location.hash.replace('#', '');
      this.switchModule(moduleId);
    }
  },

  bindEvents() {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const moduleId = el.dataset.module;
        location.hash = moduleId;
        this.switchModule(moduleId);
        document.querySelector('.nav').classList.remove('open');
      });
    });

    // Search
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', () => this.handleSearch());
    document.getElementById('searchClear').addEventListener('click', () => {
      searchInput.value = '';
      document.getElementById('searchClear').classList.remove('visible');
      this.clearSearch();
    });

    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', () => this.toggleTheme());

    // Menu toggle
    document.getElementById('menuToggle').addEventListener('click', () => {
      document.querySelector('.nav').classList.toggle('open');
    });

    // Favorites drawer
    document.getElementById('fabFavorites').addEventListener('click', () => {
      document.getElementById('favoritesDrawer').classList.add('open');
    });
    document.getElementById('drawerClose').addEventListener('click', () => {
      document.getElementById('favoritesDrawer').classList.remove('open');
    });

    // Close drawer on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.getElementById('favoritesDrawer').classList.remove('open');
      }
    });
  },

  loadTheme() {
    const theme = localStorage.getItem('diagTheme');
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.getElementById('themeToggle').textContent = '☀️';
    }
  },

  toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    if (isDark) {
      html.removeAttribute('data-theme');
      localStorage.setItem('diagTheme', 'light');
      document.getElementById('themeToggle').textContent = '🌙';
    } else {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('diagTheme', 'dark');
      document.getElementById('themeToggle').textContent = '☀️';
    }
  },

  renderWelcome() {
    const totalCards = MODULES.reduce((sum, m) => sum + m.cards.length, 0);
    document.getElementById('totalCards').textContent = totalCards;
    document.getElementById('studiedCards').textContent = this.studied.length;
    document.getElementById('favoriteCards').textContent = this.favorites.length;

    const container = document.getElementById('welcomeModules');
    container.innerHTML = MODULES.map(m => `
      <button class="welcome-module-btn" data-module="${m.id}">
        <span class="icon">${m.icon}</span>
        <span class="name">${m.title}</span>
        <span style="font-size:12px;color:var(--text-secondary);display:block;margin-top:4px;">${m.cards.length}个知识点</span>
      </button>
    `).join('');

    container.querySelectorAll('.welcome-module-btn').forEach(el => {
      el.addEventListener('click', () => {
        const moduleId = el.dataset.module;
        location.hash = moduleId;
        this.switchModule(moduleId);
      });
    });
  },

  switchModule(moduleId) {
    // Special handling for quiz
    if (moduleId === 'quiz') {
      document.getElementById('welcome').style.display = 'none';
      document.getElementById('searchResults').style.display = 'none';
      document.getElementById('moduleContent').style.display = 'none';
      document.getElementById('quizArea').style.display = 'block';
      document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.toggle('active', el.dataset.module === moduleId);
      });
      if (typeof Quiz !== 'undefined') {
        Quiz.init();
        Quiz.bindEvents();
      }
      return;
    }

    const mod = MODULES.find(m => m.id === moduleId);
    if (!mod) return;

    this.currentModule = mod;
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('moduleContent').style.display = 'block';
    document.getElementById('quizArea').style.display = 'none';

    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.module === moduleId);
    });

    this.renderModule(mod);
  },

  renderModule(mod) {
    document.getElementById('moduleTitle').textContent = `${mod.icon} ${mod.title}`;
    this.updateProgress(mod);
    this.renderCards(mod.cards, 'cardsContainer', mod);
  },

  renderCards(cards, containerId, mod) {
    const container = document.getElementById(containerId);
    container.innerHTML = cards.map((card, i) => `
      <div class="card ${this.studied.includes(card.id) ? '' : ''}" data-card-id="${card.id}">
        <div class="card-header" data-action="toggle">
          <span class="card-index">${i + 1}</span>
          <span class="card-title">${card.title}</span>
          <span style="font-size:13px;color:var(--text-secondary);flex-shrink:0;">${card.tags.slice(0, 2).map(t => `<span class="card-badge">${t}</span>`).join(' ')}</span>
          <button class="card-fav" data-action="fav" data-card-id="${card.id}">${this.favorites.includes(card.id) ? '⭐' : '☆'}</button>
          <span class="card-arrow">▾</span>
        </div>
        <div class="card-body">
          <div class="card-content">
            ${this.renderSections(card.sections)}
          </div>
        </div>
      </div>
    `).join('');

    // Card events
    container.querySelectorAll('.card-header').forEach(header => {
      header.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="fav"]')) return;
        const card = header.closest('.card');
        const isOpen = card.classList.contains('open');
        card.classList.toggle('open');

        // Mark as studied
        if (!isOpen) {
          const cardId = card.dataset.cardId;
          if (!this.studied.includes(cardId)) {
            this.studied.push(cardId);
            localStorage.setItem('diagStudied', JSON.stringify(this.studied));
            if (this.currentModule) this.updateProgress(this.currentModule);
            this.renderWelcome();
          }
        }
      });
    });

    // Favorite events
    container.querySelectorAll('[data-action="fav"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cardId = btn.dataset.cardId;
        this.toggleFav(cardId);
        btn.textContent = this.favorites.includes(cardId) ? '⭐' : '☆';
      });
    });
  },

  renderSections(sections) {
    return sections.map(s => {
      switch (s.type) {
        case 'p':
          return `<p>${s.content}</p>`;
        case 'table':
          return `
            ${s.title ? `<p><strong>${s.title}</strong></p>` : ''}
            <table class="card-table">
              <thead><tr>${s.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
              <tbody>${s.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
            </table>`;
        case 'mnemonic':
          return `<div class="mnemonic">${s.content}</div>`;
        default:
          return '';
      }
    }).join('');
  },

  toggleFav(cardId) {
    const idx = this.favorites.indexOf(cardId);
    if (idx > -1) {
      this.favorites.splice(idx, 1);
    } else {
      this.favorites.push(cardId);
    }
    localStorage.setItem('diagFav', JSON.stringify(this.favorites));
    this.updateFavBadge();
    this.renderWelcome();
    // Update drawer if open
    if (document.getElementById('favoritesDrawer').classList.contains('open')) {
      this.renderDrawer();
    }
  },

  updateFavBadge() {
    document.getElementById('favBadge').textContent = this.favorites.length;
  },

  updateProgress(mod) {
    const total = mod.cards.length;
    const studied = mod.cards.filter(c => this.studied.includes(c.id)).length;
    document.getElementById('progressText').textContent = `${studied}/${total}`;
    document.getElementById('progressFill').style.width = `${(studied / total) * 100}%`;
  },

  handleSearch() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const clearBtn = document.getElementById('searchClear');

    if (!query) {
      clearBtn.classList.remove('visible');
      this.clearSearch();
      return;
    }
    clearBtn.classList.add('visible');

    const results = [];
    MODULES.forEach(mod => {
      mod.cards.forEach(card => {
        const searchText = `${card.title} ${card.summary} ${card.tags.join(' ')} ${card.sections.map(s => s.content || '').join(' ')}`.toLowerCase();
        if (searchText.includes(query)) {
          results.push({ ...card, _module: mod });
        }
      });
    });

    document.getElementById('welcome').style.display = 'none';
    document.getElementById('moduleContent').style.display = 'none';
    document.getElementById('quizArea').style.display = 'none';
    document.getElementById('searchResults').style.display = 'block';

    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

    if (results.length === 0) {
      document.getElementById('searchCardsContainer').innerHTML = `<p style="color:var(--text-secondary);text-align:center;padding:40px;">未找到匹配"${query}"的知识点</p>`;
    } else {
      document.getElementById('searchCount').textContent = `（${results.length}条）`;

      // Group by module for search results
      const grouped = {};
      results.forEach(r => {
        const modId = r._module.id;
        if (!grouped[modId]) grouped[modId] = { mod: r._module, cards: [] };
        grouped[modId].cards.push(r);
      });

      let html = '';
      Object.keys(grouped).forEach(modId => {
        const g = grouped[modId];
        html += `<h4 style="margin:16px 0 8px;color:var(--text-secondary);">${g.mod.icon} ${g.mod.title}</h4>`;
        // Re-render cards using the render logic
        const containerId = 'searchTemp';
        // We can't easily nest, so just render card headers manually
        g.cards.forEach((card, i) => {
          const isFav = this.favorites.includes(card.id);
          html += `
            <div class="card" data-card-id="${card.id}">
              <div class="card-header" data-action="toggle">
                <span class="card-index">${i + 1}</span>
                <span class="card-title">${card.title}</span>
                <button class="card-fav" data-action="fav" data-card-id="${card.id}">${isFav ? '⭐' : '☆'}</button>
                <span class="card-arrow">▾</span>
              </div>
              <div class="card-body">
                <div class="card-content">
                  ${this.renderSections(card.sections)}
                </div>
              </div>
            </div>`;
        });
      });

      document.getElementById('searchCardsContainer').innerHTML = html;

      // Rebind events for search results
      document.querySelectorAll('#searchCardsContainer .card-header').forEach(header => {
        header.addEventListener('click', (e) => {
          if (e.target.closest('[data-action="fav"]')) return;
          header.closest('.card').classList.toggle('open');
        });
      });
      document.querySelectorAll('#searchCardsContainer [data-action="fav"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const cardId = btn.dataset.cardId;
          this.toggleFav(cardId);
          btn.textContent = this.favorites.includes(cardId) ? '⭐' : '☆';
        });
      });
    }
  },

  clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('searchCardsContainer').innerHTML = '';
    document.getElementById('quizArea').style.display = 'none';
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

    if (this.currentModule) {
      document.getElementById('welcome').style.display = 'none';
      document.getElementById('moduleContent').style.display = 'block';
      document.querySelector(`.nav-item[data-module="${this.currentModule.id}"]`)?.classList.add('active');
    } else {
      document.getElementById('welcome').style.display = 'block';
      document.getElementById('moduleContent').style.display = 'none';
    }
  },

  renderDrawer() {
    const body = document.getElementById('drawerBody');
    if (this.favorites.length === 0) {
      body.innerHTML = '<p class="empty-msg">暂无收藏，浏览时点击卡片上的 ⭐ 收藏</p>';
      return;
    }

    const items = this.favorites.map(cardId => {
      for (const mod of MODULES) {
        const card = mod.cards.find(c => c.id === cardId);
        if (card) return { card, mod };
      }
      return null;
    }).filter(Boolean);

    body.innerHTML = items.map(({ card, mod }) => `
      <div class="drawer-item" data-card-id="${card.id}" data-module-id="${mod.id}">
        <div class="module-tag">${mod.icon} ${mod.title}</div>
        <div style="margin-top:4px;">${card.title}</div>
      </div>
    `).join('');

    body.querySelectorAll('.drawer-item').forEach(el => {
      el.addEventListener('click', () => {
        const modId = el.dataset.moduleId;
        const cardId = el.dataset.cardId;
        location.hash = modId;
        this.switchModule(modId);
        document.getElementById('favoritesDrawer').classList.remove('open');

        // Auto-open the specific card
        setTimeout(() => {
          const target = document.querySelector(`.card[data-card-id="${cardId}"]`);
          if (target && !target.classList.contains('open')) {
            target.classList.add('open');
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      });
    });
  }
};

// Init
document.addEventListener('DOMContentLoaded', () => {
  App.init();
  // Drawer render on open
  document.getElementById('fabFavorites').addEventListener('click', () => {
    App.renderDrawer();
  });
});
