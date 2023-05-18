export const generateReadableTitle = (key) => {
  if (key.includes("ppg")) {
    return "Points Per Game";
  } else if (key.includes("apg")) {
    return "Assists Per Game";
  } else if (key.includes("rpg")) {
    return "Rebounds Per Game";
  } else if (key.includes("bpg")) {
    return "Blocks Per Game";
  } else if (key.includes("spg")) {
    return "Steals Per Game";
  } else {
    return key;
  }
};

export const generateAbbreviatedTitle = (key) => {
  if (key.includes("ppg")) {
    return "PPG";
  } else if (key.includes("apg")) {
    return "APG";
  } else if (key.includes("rpg")) {
    return "RPG";
  } else if (key.includes("bpg")) {
    return "BPG";
  } else if (key.includes("spg")) {
    return "SPG";
  } else {
    return key;
  }
}

export const generateOneWordTitle = (key) => {
  if (key.includes("ppg")) {
    return "Points";
  } else if (key.includes("apg")) {
    return "Assists";
  } else if (key.includes("rpg")) {
    return "Rebounds";
  } else if (key.includes("bpg")) {
    return "Blocks";
  } else if (key.includes("spg")) {
    return "Steals";
  } else {
    return key;
  }
}