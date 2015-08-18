GoodTomes.Views.ReviewShow = Backbone.CompositeView.extend ({
  template: JST["reviews/review_show"],
  className: "review",

  initialize: function (options) {
    this.showPage = options.showPage;
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ review: this.model, showPage: this.showPage });
    this.$el.html(renderedContent);
    return this;
  }
});
