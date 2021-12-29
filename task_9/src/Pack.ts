interface Box {
    typeOfMaterial: number | string;
    packAndDecorate(cakeName: string): string;
    unpacking(cakeName: string): string;
}

export class Pack implements Box {
    constructor(public typeOfMaterial: number | string) {}

    changeWrap(newWrapMaterial: string): void {
        this.typeOfMaterial = newWrapMaterial;
    }

    packAndDecorate(cakeName: string): string {
        return `Торт ${cakeName} поместили в коробку и украсили бантом`;
    }

    unpacking(cakeName: string): string {
        return `Торт ${cakeName} распаковали`;
    }
}
