import React, { useState, useEffect, useMemo } from 'react';

// --- 1. DATA SUMBER (DARI XP.JS) ---
const MQ_DATA_RAW = {
  "Chapter 1": "",
  "First Time Visit": 30,
  "Straye Brother and Sister": 80,
  "A Golem on a Rampage": 730,
  "The Goddess of Wisdom": 2050,
  "The Dragon's Den": 4700,
  "The Ruined Temple": 9330,
  "The First Magic Stone": 16700,
  "Purification Incense": 27900,
  "The Dragon and Black Crystal": 43000,
  "Chapter 2": "",
  "The Merchant Girl": 64000,
  "Where Are the Gems?": 92000,
  "Who is the Black Knight?!": 118200,
  "Trials in the Palace": 149000,
  "The Moon Wizard": 172000,
  "The Follower and Hater": 227000,
  "The Wizard's Cave": 240000,
  "The Star Wizard": 255000,
  "Chapter 3": "",
  "The Invincible... Enemy??": 270000,
  "The Ancient Empress": 284000,
  "The Culprit": 319000,
  "Fate of the Fortress": 335000,
  "Memory in the Lost Town": 398000,
  "The Stolen Sorcery Gem": 417000,
  "Living with a Dragon": 462300,
  "Monsters from Outerworld": 540000,
  "Chapter 4": "",
  "The Mage Diels": 562000,
  "Journey for Reconstruction": 585000,
  "The Sacred Gem in Akaku": 710000,
  "The King of Darkan": 740000,
  "The Lurking Evil": 803000,
  "Find the False Black Knight!": 913000,
  "Technista's Movement": 1000000,
  "The Falling Feather of Death": 1100000,
  "Chapter 5": "",
  "In The Unknown Darkness": 1150000,
  "The Charm": 1310000,
  "Parching Dark Mirror": 1370000,
  "Fierce Battle in the Garden": 1550000,
  "A Light in the Darkness": 1750000,
  "The Ones Nesting in the Manor": 1970000,
  "The Dark Castle": 2210000,
  "To The Living World": 2220000,
  "Chapter 6": "",
  "Demi Machina": 2600000,
  "The Town of Pax Faction": 2700000,
  "Mechanical Heart": 2800000,
  "Black Knights of Lyark": 2820000,
  "The Mysterious Artifact": 3030000,
  "Truth of the Artifact": 3099000,
  "The Price of Treachery": 3320000,
  "The Blasphemous Factory": 3640000,
  "Mystery of the Black Knights": 4020000,
  "Chapter 7": "",
  "Monster's Forest": 4730000,
  "The Underground Town": 4820000,
  "The Elves in Lyark": 5070000,
  "The Mad Laboratory": 5500000,
  "Tragedy in the Jail": 6000000,
  "Calamity in Droma Square": 6400000,
  "Head for Ultimea Palace": 6900000,
  "The Chaotic Truth": 7400000,
  "Chapter 8": "",
  "The Mine Where Monsters Lurk": 8400000,
  "The Mysterious Shadow": 8500000,
  "The New Diel Country": 8600000,
  "The Ruins of the Gods": 8800000,
  "The Former God of Justice": 9100000,
  "The Remaining Thrones in the Shrine": 9700000,
  "Gods' Whereabouts": 10400000,
  "The Wait at Specia's Shrine": 11100000,
  "The Warden of Ice & Snow": 11800000,
  "At Mountains' End": 12500000,
  "Chapter 9": "",
  "Deadly Road to Eldenbaum": 15800000,
  "Unforeseen Traps": 17100000,
  "Traces of Technological Progress": 18200000,
  "An Unexpected Acquaintance": 19200000,
  "Front Line Base Operation": 20300000,
  "Strategy to Redeem the Treetop Harbor": 21500000,
  "The Teleporter Left Behind": 22700000,
  "The Man Who Seeks Death": 23900000,
  "The Battle to Recapture Eldenbaum": 25000000,
  "A New Beginning": 13000000,
  "Chapter 10": "",
  "Off to the Fateful Land": 26000000,
  "The Inhabitants Under the Cliff": 27400000,
  "The Nightmare Returns": 28800000,
  "The Whereabouts of the Missing Monks": 30200000,
  "The Goddess of Justice and the Squatters": 31600000,
  "Navigator of the Ark": 33100000,
  "Witch in the Woods": 34600000,
  "The Duel in Nov Diela": 36200000,
  "Chapter 11": "",
  "Flying the Ark": 37800000,
  "Land of the Unknown": 49000000,
  "The Strolling Forest": 51000000,
  "Eumanos the Forest Dwellers": 53400000,
  "A Sproutling is Born": 55700000,
  "The Blessing-Bearer": 58100000,
  "Intense Battle in Coenubia's Stronghold": 60500000,
  "The Shadow of a Smoky Mountain": 63000000,
  "The Weredragons & the Underground World": 65500000,
  "Chapter 12": "",
  "The Sky with a Ceiling": 73400000,
  "Rivalry Between Dragons and Weredragons": 76300000,
  "Weredragon Couple and a Baby": 79300000,
  "Weredragons' Vital Point": 82300000,
  "Intense Battle in Propulsion System": 85300000,
  "Discovering a New Technology": 44200000,
  "Ark Repair": 92700000,
  "Weredragon Dispute": 96000000,
  "Cocoon in the Ice Wall": 99300000,
  "Chapter 13": "",
  "Underwater Inhabitants": 112600000,
  "Water Dome": 116500000,
  "Underwater City": 60200000,
  "The Thing in the Abandoned District": 125800000,
  "Shadow from the Abyss": 129900000,
  "The Ruthless Council": 67000000,
  "Mysterious Entity in the Little Shrine": 139900000,
  "The Great Battle Underwater": 144200000,
  "Chapter 14": "",
  "Crisis in the Sky": 159100000,
  "The Surviving Siblings": 164000000,
  "Chaotic Situation": 168900000,
  "The Bitter Truth": 173800000,
  "The Uncouth Rana Prince": 178800000,
  "Mutant Coenubia Village": 183900000,
  "Fierce Battle with Mutant Lixis": 189000000,
  "Chapter 15": "",
  "Ark Crisis": 210500000,
  "Coastal Clash": 216300000,
  "Unda's Rescue Operation": 222200000,
};

// --- 2. LOGIKA MATEMATIKA ASLI (DARI XP.JS) ---

const getXP = (lv) => Math.floor(0.025 * Math.pow(lv, 4) + 2 * lv);

const addXP = (beginLv, beginPercentage, extraXP) => {
  let remainingXP = extraXP;
  let lv = beginLv;
  let XPRequiredNextLv = (1 - beginPercentage / 100) * getXP(beginLv);

  if (extraXP < XPRequiredNextLv) {
    let currentXP = (beginPercentage / 100) * getXP(beginLv) + extraXP;
    let newPercent = Math.floor(100 * currentXP / getXP(beginLv));
    return [beginLv, newPercent];
  } else {
    remainingXP -= XPRequiredNextLv;
    lv = beginLv + 1;
    while (getXP(lv) <= remainingXP && lv < 310) {
      remainingXP -= getXP(lv);
      lv += 1;
    }
    let lvPercentage = Math.floor(100 * remainingXP / getXP(lv));
    return [lv, lvPercentage];
  }
};

const parseMQData = () => {
  let list = [];
  let currentChapter = 0;
  let keys = Object.keys(MQ_DATA_RAW);

  keys.forEach((key, index) => {
    if (key.startsWith("Chapter")) {
      currentChapter++;
    } else {
      list.push({
        index: index,
        label: `CH${currentChapter} - ${key}`,
        exp: MQ_DATA_RAW[key]
      });
    }
  });
  return { list, keys };
};

// --- 3. KOMPONEN REACT DENGAN TAILWIND ---

const ToramCalculator = () => {
  const [level, setLevel] = useState(1);
  const [percent, setPercent] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const [skipVenena, setSkipVenena] = useState(true);
  const [multiplier, setMultiplier] = useState(1);
  const [isSpamMode, setIsSpamMode] = useState(false);

  const { list: questList, keys: rawKeys } = useMemo(() => parseMQData(), []);

  useEffect(() => {
    if (questList.length > 0) {
      setStartIndex(questList[0].index);
      setEndIndex(questList[questList.length - 1].index);
    }
  }, [questList]);

  const result = useMemo(() => {
    if (startIndex > endIndex) return null;

    let totalMqXP = 0;
    for (let i = startIndex; i <= endIndex; i++) {
      let key = rawKeys[i];
      if (MQ_DATA_RAW[key] === "") continue;

      let xpValue = Number(MQ_DATA_RAW[key]);
      totalMqXP += xpValue;

      if (i === 85 && !skipVenena) {
        totalMqXP += 12500000;
      }
    }

    const finalXP = totalMqXP * multiplier;
    const [newLv, newPct] = addXP(level, percent, finalXP);

    return {
      xpGained: finalXP,
      finalLevel: newLv,
      finalPercent: newPct
    };

  }, [level, percent, startIndex, endIndex, skipVenena, multiplier, rawKeys]);

  return (
    <div className="max-w-xl mx-auto my-10 p-6 bg-white rounded-xl shadow-lg font-sans text-gray-700 dark:bg-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold text-center mb-6">Toram EXP Calculator</h2>

      {/* Input Level Saat Ini */}
      <div className=" p-4 rounded-lg mb-6">
        <h4 className="text-sm font-bold uppercase tracking-wider mb-3">Current Status</h4>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Level</label>
            <input
              type="number"
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              value={level}
              onChange={e => setLevel(Math.max(1, Number(e.target.value)))}
              min="1"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Percent (%)</label>
            <input
              type="number"
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              value={percent}
              onChange={e => setPercent(Math.min(99, Math.max(0, Number(e.target.value))))}
              min="0"
              max="99"
            />
          </div>
        </div>
      </div>

      {/* Pilihan Quest */}
      <div className="mb-6 space-y-4">
        <div>
          <label className="block text-sm font-bold mb-2">Start From:</label>
          <div className="relative">
            <select
              className="w-full appearance-none px-4 dark:bg-gray-900 py-2 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              value={startIndex}
              onChange={e => setStartIndex(Number(e.target.value))}
            >
              {questList.map(q => (
                <option key={q.index} value={q.index}>{q.label}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Until:</label>
          <div className="relative">
            <select
              className="w-full appearance-none px-4 py-2 pr-8 rounded-lg dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500  cursor-pointer"
              value={endIndex}
              onChange={e => setEndIndex(Number(e.target.value))}
            >
              {questList.map(q => (
                <option key={q.index} value={q.index}>{q.label}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center ">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Opsi Tambahan */}
      <div className="mb-6 space-y-3 p-2">
        <label className="flex items-center gap-3 p-2 rounded cursor-pointer transition-colors">
          <input
            type="checkbox"
            className="w-5 h-5  rounded focus:ring-blue-500"
            checked={skipVenena}
            onChange={e => setSkipVenena(e.target.checked)}
          />
          <span className="text-sm ">Skip Pre-Venena Metacoenubia (No Bonus XP)</span>
        </label>

        <div className=" pt-2">
          <label className="flex items-center gap-3 p-2 rounded cursor-pointer transition-colors">
            <input
              type="checkbox"
              className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              checked={isSpamMode}
              onChange={e => {
                setIsSpamMode(e.target.checked);
                if (!e.target.checked) setMultiplier(1);
              }}
            />
            <span className="text-sm font-medium">Spam Adventurers Diaries</span>
          </label>

          {isSpamMode && (
            <div className="ml-10 mt-2 flex items-center gap-3 animate-fade-in">
              <label className="text-sm">Times:</label>
              <input
                type="number"
                className="w-20 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="1"
                value={multiplier}
                onChange={e => setMultiplier(Math.max(1, Number(e.target.value)))}
              />
            </div>
          )}
        </div>
      </div>

      {/* Hasil */}
      <div className={`p-6 rounded-xl text-center transition-all duration-300 ${result ? ' ' : ' '}`}>
        {result ? (
          <>
            <div className="text-sm mb-1 font-medium">
              Total XP Gained: <span className="">{new Intl.NumberFormat().format(result.xpGained)}</span>
            </div>
            <div className="text-3xl font-extrabold  my-2">
              Lv.{result.finalLevel} <span className="text-lg  font-semibold">({result.finalPercent}%)</span>
            </div>
            <div className="text-xs  mt-2 italic">
              *Calculated using authentic Toram growth formula
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center gap-2 font-semibold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Invalid Range: Start quest must be before End quest.
          </div>
        )}
      </div>
    </div>
  );
};

export default ToramCalculator;
