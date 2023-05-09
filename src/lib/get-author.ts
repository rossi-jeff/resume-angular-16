import { FormatName } from './format-name';
import { Comment } from '../types/comment.type';

export const getAuthor = (comment: Comment) => {
  let name: string = '';
  if (comment.Admins && comment.Admins.length) {
    name = FormatName(comment.Admins[0].Name);
  } else if (comment.References && comment.References.length) {
    name = FormatName(comment.References[0].Name);
  } else if (comment.Visitors && comment.Visitors.length) {
    name = FormatName(comment.Visitors[0].Name);
  }
  return name;
};
