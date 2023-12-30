import Stories from 'react-insta-stories';
import { IonPage, IonContent } from '@ionic/react';
import { useHistory } from 'react-router';
import { Story } from 'react-insta-stories/dist/interfaces';

export default function StoriesPage() {
  const history = useHistory();

  const stories: Story[] = [
    {
      url: 'https://picsum.photos/500/300',
      header: {
        heading: 'Abdul Jamil, S.Pd.',
        subheading: 'Guru PAI SMP Gunungpati Semarang',
        profileImage: 'https://i.pravatar.cc/150?img=1',
      },
    },
    {
      url: 'https://picsum.photos/500/300',
      header: {
        heading: 'Abdul Jamil, S.Pd.',
        subheading: 'Guru PAI SMP Gunungpati Semarang',
        profileImage: 'https://i.pravatar.cc/150?img=1',
      },
    },
    {
      url: 'https://picsum.photos/500/300',
      header: {
        heading: 'Abdul Jamil, S.Pd.',
        subheading: 'Guru PAI SMP Gunungpati Semarang',
        profileImage: 'https://i.pravatar.cc/150?img=1',
      },
    },
  ];

  return (
    <IonPage>
      <IonContent fullscreen>
        <Stories
          loop
          keyboardNavigation
          stories={stories}
          onStoryEnd={() => console.log('story ended')}
          onAllStoriesEnd={() => history.goBack()}
          defaultInterval={3000}
          width={window.innerWidth}
          height={window.innerHeight}
        />
      </IonContent>
    </IonPage>
  );
}
