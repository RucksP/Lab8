const formatVolumeIconPath = require('../assets/scripts/main');

describe('formatVolumeIconPath tests', () => {
    test('level 0', () => {
        expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`);
    });
    test('level 1', () => {
        expect(formatVolumeIconPath(1)).toBe(`./assets/media/icons/volume-level-1.svg`);
    });
    test('level 2', () => {
        expect(formatVolumeIconPath(34)).toBe(`./assets/media/icons/volume-level-2.svg`);
    });
    test('level 3', () => {
        expect(formatVolumeIconPath(67)).toBe(`./assets/media/icons/volume-level-3.svg`);
    });
})