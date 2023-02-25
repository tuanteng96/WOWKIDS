export const DetectHelpers = {
    UpIphoneX: () => {
        document.documentElement.style.setProperty(
            '--safe-bunny-height',
            'env(safe-area-inset-bottom)',
          )
        return parseInt(getComputedStyle(document.documentElement).getPropertyValue("--safe-ios"))
    }
}