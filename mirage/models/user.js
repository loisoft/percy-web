import {Model, hasMany} from 'ember-cli-mirage';

export default Model.extend({
  organizations: hasMany('organization'),
  tokens: hasMany('token')
});
