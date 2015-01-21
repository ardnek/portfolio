import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
  {id: 1, title: 'Job 1', body: 'Worked from years x to x', experience: "Accomplished x and x"},
  {id: 2, title: 'Job 2', body: 'Worked from years x to x', experience: "Accomplished x and x"},
  {id: 3, title: 'Job 3', body: 'Worked from years x to x', experience: "Accomplished x and x"}
];
}
});
