import {JSONAPISerializer} from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  links(project) {
    return {
      'tokens': {
        related: `/api/v1/projects/${project.fullSlug}/tokens`
      }
    };
  }
});
