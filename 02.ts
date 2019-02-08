// population of africa: 1,287,269,147

const africaPop = 1_287_269_147;

class MountInput {
  private static MAX_ALLOWED = 99_999_999;

  amount: number = 0;

  showTooltip() {
    // show tooltip
    setTimeout(() => {
      // hide tooltip
    }, 2_500);
  }

  formatMillion() {
    return this.amount / 1_000_000 + 'M';
  }
}
