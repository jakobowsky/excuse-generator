function generate_excuse() {
  const adverbs = [
    "aggressively",
    "automagically",
    "dramatically",
    "dramatically",
    "excessively",
    "fails to",
    "inappropriately",
    "incorrectly",
    "inefficiently",
    "objectively",
    "poorly",
    "violently",
    "unexpectedly",
  ];

  const verbs = [
    "automated",
    "backed up",
    "communicated",
    "compiled",
    "concatinated",
    "cooperated",
    "crashed",
    "decayed",
    "deployed",
    "developed",
    "escalated",
    "facilitated",
    "formulated",
    "generated",
    "hacked",
    "impacted",
    "inherited",
    "integrated",
    "leveraged existing",
    "maintained",
    "optimized",
    "overpowered",
    "parsed",
    "queried",
    "requested",
    "restored",
    "updated",
    "reticulated",
    "containerized",
    "Leeroy Jenkins'd",
    "exploded",
    "processed",
  ];

  const adjectives = [
    "agile",
    "ancient",
    "bloated",
    "buggy",
    "clunky",
    "enterprise-wide",
    "full",
    "incredibly old",
    "innovative",
    "interactive",
    "leveraged",
    "local",
    "multifunctional",
    "nested",
    "new",
    "old",
    "open-source",
    "optimal",
    "patched-together",
    "plug and play",
    "Process heavy",
    "real-time",
    "remote",
    "robust",
    "shoddy",
    "static",
    "unreliable",
    "updated",
    "virtual",
    "wireless",
    "cross-platform",
    "scalable",
    "slapped together",
    "out-of-date",
  ];

  const nouns = [
    "algorithm",
    "API",
    "application",
    "architecture",
    "back end",
    "backup",
    "bandwidth",
    "build",
    "code",
    "conditional",
    "connection",
    "control fow",
    "data",
    "database",
    "deployment",
    "Docker",
    "environment",
    "framework",
    "front end",
    "function",
    "functionalities",
    "GUI",
    "IDE",
    "infrastructure",
    "integer",
    "interpreter",
    "Jenkins",
    "language",
    "loops",
    "matrix",
    "monolith",
    "node",
    "object",
    "operator",
    "program",
    "recursion",
    "script",
    "server",
    "source code",
    "stack",
    "string",
    "structure",
    "syntax",
    "system",
    "tech debt",
    "terminal",
    "test coverage",
    "values",
    "variable",
    "process",
  ];
  const sentences = [
    `The ${get_random_array_element(adjectives)} ${get_random_array_element(
      nouns
    )} ${get_random_array_element(adverbs)} ${get_random_array_element(
      verbs
    )} the ${get_random_array_element(adjectives)} ${get_random_array_element(
      nouns
    )}`,
    `Our ${get_random_array_element(nouns)} ${get_random_array_element(
      adverbs
    )} ${get_random_array_element(verbs)} when the ${get_random_array_element(
      adjectives
    )} ${get_random_array_element(nouns)} ${get_random_array_element(verbs)}`,
    `The ${get_random_array_element(adjectives)} ${get_random_array_element(
      nouns
    )} ${get_random_array_element(adverbs)} ${get_random_array_element(
      verbs
    )} from the ${get_random_array_element(
      adjectives
    )} ${get_random_array_element(nouns)}`,
  ];
  const excuse_output = document.getElementById("excuse_output");
  excuse_output.innerHTML = `${get_random_array_element(sentences)}`;
  excuse_output.classList.remove("hidden");
}

function get_random_array_element(array) {
  return array[Math.floor(Math.random() * array.length)];
}
