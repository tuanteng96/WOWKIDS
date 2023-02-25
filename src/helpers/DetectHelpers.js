export const DetectHelpers = {
  UpIphoneX: () => {
    document.documentElement.style.setProperty(
      "--safe-bunny-height",
      "env(safe-area-inset-bottom)"
    );
    return parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--safe-ios")
    );
  },
  ResizeImageWindows: (wIMG, hIMG) => {
    const { width, height } = {
      width: window.innerWidth,
      height: window.innerHeight - 57,
    };
    // true => width = 100 ; height = auto
    // false => height = 100; width = auto
    return width / height < wIMG / hIMG;
  },
};
