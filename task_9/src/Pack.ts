interface Box {
    readonly typeOfMaterial: number | string;
    packAndDecorate(cakeName: string): string;
    unpacking(cakeName: string): string;
}

export class Pack implements Box {
    constructor(public typeOfMaterial: number | string) {}

    public changeWrap(newWrapMaterial: string): void {
        this.typeOfMaterial = newWrapMaterial;
    }

    public packAndDecorate(cakeName: string): string {
        return `Торт ${cakeName} поместили в коробку и украсили бантом`;
    }

    public unpacking(cakeName: string): string {
        return `Торт ${cakeName} распаковали`;
    }
}
