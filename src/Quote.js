import React from "react";

export default function Quote(props) {
  const codeMapping = {
    "clear-sky-day": `"Keep your eyes lifted high upon the sun, and you'll see the best light in
      everyone. - Tess Guinery"`,
    "clear-sky-night": `"Keep your eyes lifted high upon the stars, and you'll see the best light in
      everyone. - Tess Guinery"`,
    "few-clouds-day": `"The sky and the sun are always there. It's the clouds that come and go. - Rachel Joyce"`,
    "few-clouds-night": `"The sky and the stars are always there. It's the clouds that come and go. - Rachel Joyce"`,
    "scattered-clouds-day": `"The sky and the sun are always there. It's the clouds that come and go. - Rachel Joyce"`,
    "scattered-clouds-night": `"The sky and the stars are always there. It's the clouds that come and go. - Rachel Joyce"`,
    "broken-clouds-day": `"The sky and the sun are always there. It's the clouds that come and go. - Rachel Joyce"`,
    "broken-clouds-night": `"The sky and the stars are always there. It's the clouds that come and go. - Rachel Joyce"`,
    "shower-rain-day": `"Smell the rain, and feel the sky. Let your soul and spirit fly. - Van Morrison`,
    "shower-rain-night": `"Smell the rain, and feel the sky. Let your soul and spirit fly. - Van Morrison`,
    "rain-day": `"Smell the rain, and feel the sky. Let your soul and spirit fly. - Van Morrison`,
    "rain-night": `"Smell the rain, and feel the sky. Let your soul and spirit fly. - Van Morrison`,
    "thunderstorm-day": `"Thunder is good, thunder is impressive, but it's the lightning that does the work. - Mark Twain"`,
    "thunderstorm-night": `"Thunder is good, thunder is impressive, but it's the lightning that does the work. - Mark Twain"`,
    "snow-day": `"To appreciate the beauty of a snowflake it is necessary to stand out in the cold. - Aristotle"`,
    "snow-night": `"To appreciate the beauty of a snowflake it is necessary to stand out in the cold. - Aristotle"`,
    "mist-day": `"It is the set of the sails, not the direction of the wind that determines which way we will go. - Jim Rohn"`,
    "mist-night": `"Sometimes we need the fog to remind ourselves that all of life is not black and white. - Jonathan Lockwood Huie"`,
  };

  return <p className="quote-of-day">{codeMapping[props.weather]}</p>;
}
