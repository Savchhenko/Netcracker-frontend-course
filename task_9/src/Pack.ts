interface Box {
    packAndDecorate(cakeName: string): string;
    unpacking(cakeName: string): string;
}

interface Wrap {
    wrapMaterial: string;
    changeWrap(newWrapMaterial: string): void;
}

export class Pack implements Box, Wrap{
    constructor(public wrapMaterial: string) {}

    changeWrap(newWrapMaterial: string): void {
        this.wrapMaterial = newWrapMaterial;
    }

    packAndDecorate(cakeName: string) {
        return `Торт ${cakeName} поместили в коробку и украсили бантом`;
    }

    unpacking(cakeName: string) {
        return `Торт ${cakeName} распаковали`;
    }
}
