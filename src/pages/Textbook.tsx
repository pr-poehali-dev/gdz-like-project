import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const mockExercises = Array.from({ length: 50 }, (_, i) => ({
  number: i + 1,
  type: i % 5 === 0 ? 'Контрольная работа' : i % 3 === 0 ? 'Практическое задание' : 'Упражнение',
  difficulty: ['Легко', 'Средне', 'Сложно'][Math.floor(Math.random() * 3)],
  hasVideo: i % 4 === 0,
  hasSolution: true,
}));

export default function Textbook() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const bookTitle = searchParams.get('title') || 'Учебник';
  const bookId = searchParams.get('id') || '1';

  const [searchNumber, setSearchNumber] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredExercises = mockExercises.filter((ex) => {
    const matchesSearch = searchNumber === '' || ex.number.toString().includes(searchNumber);
    const matchesType = !selectedType || ex.type === selectedType;
    return matchesSearch && matchesType;
  });

  const exerciseTypes = Array.from(new Set(mockExercises.map((ex) => ex.type)));

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Легко':
        return 'bg-green-100 text-green-700';
      case 'Средне':
        return 'bg-amber-100 text-amber-700';
      case 'Сложно':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-pink-50">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-violet-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center shadow-lg">
                <Icon name="BookOpen" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                ГДЗ.рф
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" className="text-gray-700 hover:text-violet-600 font-medium" onClick={() => navigate('/')}>
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-violet-600 font-medium">
                <Icon name="BookMarked" size={18} className="mr-2" />
                Решебники
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-violet-600 font-medium">
                <Icon name="Library" size={18} className="mr-2" />
                Учебники
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-violet-600 font-medium" onClick={() => navigate('/profile')}>
                <Icon name="User" size={18} className="mr-2" />
                Профиль
              </Button>
            </nav>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4 text-gray-600 hover:text-violet-600">
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад
          </Button>

          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-violet-600 to-pink-600"></div>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-48 h-64 rounded-2xl bg-gradient-to-br from-violet-100 to-pink-100 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Icon name="BookOpen" size={80} className="text-violet-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">{bookTitle}</h2>
                  <p className="text-gray-600 mb-6">Полное решение всех упражнений учебника</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <Badge className="bg-violet-100 text-violet-700 border-0 px-4 py-2">
                      <Icon name="FileText" size={16} className="mr-2" />
                      {mockExercises.length} упражнений
                    </Badge>
                    <Badge className="bg-pink-100 text-pink-700 border-0 px-4 py-2">
                      <Icon name="Video" size={16} className="mr-2" />
                      Видеоразборы
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-700 border-0 px-4 py-2">
                      <Icon name="CheckCircle" size={16} className="mr-2" />
                      Пошаговые решения
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white shadow-lg">
                      <Icon name="Heart" size={18} className="mr-2" />
                      Добавить в избранное
                    </Button>
                    <Button variant="outline" className="border-violet-300 text-violet-600 hover:bg-violet-50">
                      <Icon name="Share2" size={18} className="mr-2" />
                      Поделиться
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8 animate-slide-up">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Введите номер упражнения..."
                  className="pl-12 pr-4 py-6 text-lg border-2 border-violet-200 focus:border-violet-500 rounded-2xl shadow-lg"
                  value={searchNumber}
                  onChange={(e) => setSearchNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge
                variant={selectedType === null ? "default" : "outline"}
                className="cursor-pointer px-4 py-3 text-sm transition-all hover:scale-105"
                onClick={() => setSelectedType(null)}
              >
                Все типы
              </Badge>
              {exerciseTypes.map((type) => (
                <Badge
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  className="cursor-pointer px-4 py-3 text-sm transition-all hover:scale-105"
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Icon name="ListOrdered" size={28} className="text-violet-600" />
            {filteredExercises.length === mockExercises.length
              ? 'Все упражнения'
              : `Найдено: ${filteredExercises.length}`}
          </h3>

          {filteredExercises.length === 0 ? (
            <Card className="border-0 shadow-lg">
              <CardContent className="p-12 text-center">
                <Icon name="SearchX" size={64} className="mx-auto text-gray-300 mb-4" />
                <h4 className="text-xl font-bold mb-2">Упражнения не найдены</h4>
                <p className="text-gray-500">Попробуйте изменить номер или фильтры</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredExercises.map((exercise, index) => (
                <Card
                  key={exercise.number}
                  className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer border-0 shadow-lg animate-scale-in group"
                  style={{ animationDelay: `${(index % 12) * 50}ms` }}
                  onClick={() => navigate(`/exercise?id=${bookId}&num=${exercise.number}&title=${encodeURIComponent(bookTitle)}`)}
                >
                  <div className="h-2 bg-gradient-to-r from-violet-600 to-pink-600"></div>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-2xl font-bold text-violet-600 mb-1">№ {exercise.number}</h4>
                        <p className="text-sm text-gray-600">{exercise.type}</p>
                      </div>
                      <Icon
                        name="ChevronRight"
                        size={24}
                        className="text-gray-400 group-hover:text-violet-600 group-hover:translate-x-1 transition-all"
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={`${getDifficultyColor(exercise.difficulty)} border-0 text-xs`}>
                        {exercise.difficulty}
                      </Badge>
                      {exercise.hasVideo && (
                        <Badge className="bg-pink-100 text-pink-700 border-0 text-xs">
                          <Icon name="Video" size={12} className="mr-1" />
                          Видео
                        </Badge>
                      )}
                    </div>
                    {exercise.hasSolution && (
                      <div className="flex items-center gap-2 text-green-600 text-sm">
                        <Icon name="CheckCircle2" size={16} />
                        <span className="font-medium">Решение готово</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-violet-100 to-purple-100">
            <CardContent className="p-8">
              <Icon name="Lightbulb" size={48} className="text-violet-600 mb-4" />
              <h4 className="text-xl font-bold mb-2">Нужна помощь?</h4>
              <p className="text-gray-700 mb-4">
                Не можете найти решение? Задайте вопрос нашим экспертам!
              </p>
              <Button className="bg-violet-600 hover:bg-violet-700 text-white">
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Задать вопрос
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-100 to-rose-100">
            <CardContent className="p-8">
              <Icon name="Star" size={48} className="text-pink-600 mb-4" />
              <h4 className="text-xl font-bold mb-2">Понравился учебник?</h4>
              <p className="text-gray-700 mb-4">
                Оцените качество решений и помогите другим ученикам!
              </p>
              <Button className="bg-pink-600 hover:bg-pink-700 text-white">
                <Icon name="ThumbsUp" size={18} className="mr-2" />
                Оценить
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
