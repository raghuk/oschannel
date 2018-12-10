import { isEmpty, replace, trim, upperFirst, forEach, split, concat } from 'lodash';

const base64 = require('base-64');
const utf8 = require('utf8');
const json = require('comment-json');

export function transformInfo(data) {
  if (!isEmpty(data)) {
    let { content } = data;

    content = replace(content, /<(.|\n)*?>/g, '');
    content = base64.decode(content);
    content = utf8.decode(content);
    content = json.parse(content, null, true);

    return { yApiKey: content.yApiKey, items: content.items, removableTitles: content.removeFromVideoTitle, updatedAt: Date.now() };
  }

  return {};
}

export function transformShowlist(data) {
  if (!isEmpty(data)) {
    let content = data.items;

    content = content.map((i) => {
      const { snippet } = i;

      return {
        id: i.id,
        title: upperFirst(trim(snippet.title)),
        thumbnailUrl: snippet.thumbnails.medium.url, // default, medium, high, standard, maxres
        publishedAt: snippet.publishedAt,
        channelId: snippet.channelId,
        count: i.contentDetails.itemCount
      };
    });

    return content;
  }

  return {};
}

export function transformPlaylist(data, removableTitles, title) {
  if (!isEmpty(data)) {
    let content = data.items;
    title = concat(split(title, ' '), ['|', '-']);

    content = content.map((i) => {
      const { snippet } = i;
      let videoTitle = snippet.title;

      forEach(removableTitles, (value) => {
        videoTitle = replace(videoTitle, new RegExp(value, 'gi'), '');
      });

      forEach(title, (value) => {
        videoTitle = replace(videoTitle, value, '');
      });

      return {
        id: i.id,
        title: upperFirst(trim(videoTitle)),
        thumbnailUrl: snippet.thumbnails.medium.url, // default, medium, high, standard, maxres
        publishedAt: snippet.publishedAt,
        channelId: snippet.channelId,
        videoId: snippet.resourceId.videoId
      };
    });

    return content;
  }

  return {};
}
