export class ReduceSummaryExample {
    execute() {
        const values = [753, 643, 975, 615];
        console.log(JSON.stringify(values));

        const sum = values => values.reduce((output, curVal) => output + curVal);
        console.log(JSON.stringify(sum(values)));

        const sum2 = values => values.reduceRight((output, curVal) => output + curVal);
        console.log(JSON.stringify(sum2(values)));
    }
}