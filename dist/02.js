// population of africa: 1,287,269,147
const africaPop = 1287269147;
class MountInput {
    constructor() {
        this.amount = 0;
    }
    showTooltip() {
        // show tooltip
        setTimeout(() => {
            // hide tooltip
        }, 2500);
    }
    formatMillion() {
        return this.amount / 1000000 + 'M';
    }
}
MountInput.MAX_ALLOWED = 99999999;
