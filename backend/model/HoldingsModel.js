const { model } = require('mongoose');
const { HoldingsSchema } = require('../schemas/HoldingSchema');

// Add methods to the schema
HoldingsSchema.statics.getUserHoldings = async function(userId) {
  return await this.find({ user: userId })
    .sort({ symbol: 1 })
    .populate('user', 'name email');
};

// Calculate current value and P&L before saving
HoldingsSchema.pre('save', function(next) {
  if (this.isModified('qty') || this.isModified('avg') || this.isModified('price')) {
    this.currentValue = this.qty * this.price;
    this.investedAmount = this.qty * this.avg;
    this.pnl = this.currentValue - this.investedAmount;
    this.pnlPercentage = (this.pnl / this.investedAmount) * 100;
  }
  next();
});

// Virtual for daily change
HoldingsSchema.virtual('dailyChange').get(function() {
  return ((this.price - this.avg) / this.avg * 100).toFixed(2);
});

// Index for better query performance
HoldingsSchema.index({ user: 1, name: 1 }, { unique: true });

const HoldingModel = model('Holding', HoldingsSchema);

module.exports = { HoldingModel };
