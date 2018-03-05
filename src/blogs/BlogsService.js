import api from './../common/services/api.service';


/**
 * Blogs Service
 */
class BlogsService {

  /**
   * Load Blogs
   */
  loadList(filter, offset) {
    const rcategories = [];
    return api.get('api/v1/blog/' + filter, { limit: 12, offset: offset })
      .then((data) => {
        return {
          blogs: data.blogs || [],
          offset: data['load-next'] || '',
        };
      });
  }

  /**
   * Load a blog entity
   * @param {string} guid
   */
  loadEntity(guid) {
    return api.get('api/v1/blog/'+guid);
  }
}

export default new BlogsService();