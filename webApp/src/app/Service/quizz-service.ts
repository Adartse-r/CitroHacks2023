import { BuiltinTypeName } from "@angular/compiler";

export class QuizzService {
    result: number;

    setResult(result: number){
        this.result = result;
    }

    getResult() : number {
        return this.result;
    }
}
