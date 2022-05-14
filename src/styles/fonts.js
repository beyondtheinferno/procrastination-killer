import Poppins from "../assets/fonts/Poppins-Regular.ttf"
import PoppinsItalic from "../assets/fonts/Poppins-Italic.ttf"
import PoppinsMedium from "../assets/fonts/Poppins-Medium.ttf"
import PoppinsSemiBold from "../assets/fonts/Poppins-SemiBold.ttf"
import OswaldBold from "../assets/fonts/Oswald-Bold.ttf"

const fonts = {
  "@font-face": [
    {
      fontFamily: "Poppins",
      src: `url('${Poppins}') format("woff")`,
      fontWeight: 400,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Poppins",
      src: `url('${PoppinsItalic}') format("woff")`,
      fontWeight: 400,
      fontStyle: "italic",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Poppins",
      src: `url('${PoppinsMedium}') format("woff")`,
      fontWeight: 500,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Poppins",
      src: `url('${PoppinsSemiBold}') format("woff")`,
      fontWeight: 600,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Oswald",
      src: `url('${OswaldBold}') format("woff")`,
      fontWeight: 700,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
  ],
}

export default fonts
