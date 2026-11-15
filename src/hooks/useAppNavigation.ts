import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {paths} from '../seo/routes';

export function useAppNavigation() {
  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (view: string, productId?: string) => {
      switch (view) {
        case 'product-detail':
          navigate(productId ? paths.product(productId) : paths.products);
          window.scrollTo({top: 0, behavior: 'smooth'});
          break;
        case 'catalogue':
          navigate(paths.products);
          window.scrollTo({top: 0, behavior: 'smooth'});
          break;
        case 'story':
          navigate(paths.about);
          window.scrollTo({top: 0, behavior: 'smooth'});
          break;
        case 'provenance':
          navigate(paths.sourcing);
          window.scrollTo({top: 0, behavior: 'smooth'});
          break;
        case 'journal':
          navigate(paths.journal);
          window.scrollTo({top: 0, behavior: 'smooth'});
          break;
        case 'contact':
          navigate(paths.contact);
          window.scrollTo({top: 0, behavior: 'smooth'});
          break;
        case 'privacy':
          navigate(paths.privacy);
          window.scrollTo({top: 0, behavior: 'smooth'});
          break;
        case 'terms':
          navigate(paths.terms);
          window.scrollTo({top: 0, behavior: 'smooth'});
          break;
        case 'home':
        default:
          navigate(paths.home);
          window.scrollTo({top: 0, behavior: 'smooth'});
          break;
      }
    },
    [navigate]
  );

  const handleSelectProduct = useCallback(
    (id: string) => {
      navigate(paths.product(id));
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
    [navigate]
  );

  const openJournalArticle = useCallback(
    (articleId: string) => {
      navigate(paths.journalArticle(articleId));
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
    [navigate]
  );

  return {handleNavigate, handleSelectProduct, openJournalArticle};
}