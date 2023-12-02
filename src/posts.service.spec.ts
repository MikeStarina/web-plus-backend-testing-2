import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  beforeEach(() => {
    postsService = new PostsService();
  });

  describe('.findMany', () => {
    const posts = [
      {text: 'Post 1'},
      {text: 'Post 2'},
      {text: 'Post 3'},
      {text: 'Post 4'},
    ];

    beforeEach(() => {
      posts.forEach((post) => postsService.create(post));
    });

    it('should return all posts if called without options', () => {
      // реализуйте тест-кейс
      const result = postsService.findMany()

      expect(result.length).toEqual(posts.length);
    });

    it('should return correct posts for skip and limit options', () => {
      const skipOption = {
        skip: 2
      }

      const skipResult = postsService.findMany(skipOption);

      expect(skipResult.length).toEqual(posts.length - skipOption.skip);


      const limitOption = {
        limit: 2
      }

      const limitResult = postsService.findMany(limitOption);

      expect(limitResult.length).toEqual(limitOption.limit);
    });

    it('should delete post', () => {

      const id = 1;
      postsService.delete(id.toString());
      const result = postsService.findMany();

      expect(result.length).toEqual(posts.length - id);
    })

    it('should update post', () => {
      const postId = 1;
      const post = {
        text: 'new text'
      };

      postsService.update(postId.toString(), post);
      const result = postsService.find(postId.toString());
      console.log(result);
      expect(result).toHaveProperty('text', post.text);
    })

    // реализуйте недостающие тест-кейсы
  });
});