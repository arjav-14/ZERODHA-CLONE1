const { model } = require('mongoose');
const { OrdersSchema } = require('../schemas/OrdersSchema');

// Add any additional methods or middleware to the schema here
OrdersSchema.statics.getUserOrders = async function(userId) {
  return await this.find({ userId: userId })
    .sort({ createdAt: -1 })
    .populate('user', 'name email');
};

// Calculate order total before saving
OrdersSchema.pre('save', function(next) {
  if (this.isModified('price') || this.isModified('quantity')) {
    this.total = this.price * this.quantity;
  }
  next();
});

const OrderModel = model('Order', OrdersSchema);

module.exports = { OrderModel };
