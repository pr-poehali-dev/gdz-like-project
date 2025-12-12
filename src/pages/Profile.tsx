import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const mockFavorites = [
  { id: 1, title: 'Алгебра 9 класс', author: 'Макарычев Ю.Н.', class: 9, subject: 'Математика', rating: 4.8, image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=400&fit=crop' },
  { id: 3, title: 'Геометрия 10-11 класс', author: 'Атанасян Л.С.', class: 11, subject: 'Математика', rating: 4.9, image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300&h=400&fit=crop' },
  { id: 5, title: 'Физика 9 класс', author: 'Перышкин А.В.', class: 9, subject: 'Физика', rating: 4.7, image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=300&h=400&fit=crop' },
];

const mockHistory = [
  { id: 2, title: 'Русский язык 8 класс', author: 'Ладыженская Т.А.', class: 8, subject: 'Русский язык', lastViewed: '2 часа назад', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=400&fit=crop' },
  { id: 4, title: 'Английский язык 7 класс', author: 'Spotlight', class: 7, subject: 'Английский', lastViewed: '5 часов назад', image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=300&h=400&fit=crop' },
  { id: 6, title: 'Химия 8 класс', author: 'Габриелян О.С.', class: 8, subject: 'Химия', lastViewed: 'Вчера', image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=300&h=400&fit=crop' },
];

const mockStats = [
  { subject: 'Математика', solved: 156, total: 200 },
  { subject: 'Русский язык', solved: 98, total: 150 },
  { subject: 'Физика', solved: 72, total: 120 },
  { subject: 'Английский', solved: 45, total: 100 },
];

export default function Profile() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(mockFavorites);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(book => book.id !== id));
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
              <Button variant="default" className="text-white font-medium bg-gradient-to-r from-violet-600 to-pink-600">
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
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-violet-600 via-pink-600 to-orange-600">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-4 ring-white/30">
                  <Icon name="User" size={48} className="text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-white mb-2">Александр Иванов</h2>
                  <p className="text-white/90 mb-4">9 класс • Школа №42</p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-0 px-4 py-2">
                      <Icon name="BookOpen" size={16} className="mr-2" />
                      12 учебников
                    </Badge>
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-0 px-4 py-2">
                      <Icon name="Heart" size={16} className="mr-2" />
                      3 избранных
                    </Badge>
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-0 px-4 py-2">
                      <Icon name="Trophy" size={16} className="mr-2" />
                      371 решено
                    </Badge>
                  </div>
                </div>
                <Button className="bg-white text-violet-600 hover:bg-white/90 font-semibold shadow-lg">
                  <Icon name="Settings" size={18} className="mr-2" />
                  Настройки
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="favorites" className="animate-slide-up">
          <TabsList className="grid w-full grid-cols-3 mb-8 h-14">
            <TabsTrigger value="favorites" className="text-base">
              <Icon name="Heart" size={20} className="mr-2" />
              Избранное
            </TabsTrigger>
            <TabsTrigger value="history" className="text-base">
              <Icon name="Clock" size={20} className="mr-2" />
              История
            </TabsTrigger>
            <TabsTrigger value="stats" className="text-base">
              <Icon name="BarChart3" size={20} className="mr-2" />
              Статистика
            </TabsTrigger>
          </TabsList>

          <TabsContent value="favorites" className="animate-fade-in">
            {favorites.length === 0 ? (
              <Card className="border-0 shadow-lg">
                <CardContent className="p-12 text-center">
                  <Icon name="Heart" size={64} className="mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Избранное пусто</h3>
                  <p className="text-gray-500 mb-6">
                    Добавьте учебники в избранное, чтобы быстро их находить
                  </p>
                  <Button onClick={() => navigate('/')} className="bg-gradient-to-r from-violet-600 to-pink-600">
                    <Icon name="Search" size={18} className="mr-2" />
                    Найти учебники
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.map((book, index) => (
                  <Card
                    key={book.id}
                    className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer border-0 shadow-lg animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-violet-100 to-pink-100">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-white/90 backdrop-blur-sm text-violet-700 border-0 shadow-lg">
                          {book.class} класс
                        </Badge>
                      </div>
                      <Button
                        size="icon"
                        variant="destructive"
                        className="absolute top-3 left-3 bg-red-500 hover:bg-red-600 shadow-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFavorite(book.id);
                        }}
                      >
                        <Icon name="Trash2" size={18} />
                      </Button>
                    </div>
                    <CardContent className="p-5">
                      <h4 className="font-bold text-lg mb-2 line-clamp-2">{book.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{book.author}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1 text-amber-500">
                          <Icon name="Star" size={16} className="fill-current" />
                          <span className="font-semibold">{book.rating}</span>
                        </div>
                        <Badge variant="outline">{book.subject}</Badge>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white shadow-lg">
                        <Icon name="BookOpen" size={18} className="mr-2" />
                        Открыть
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="history" className="animate-fade-in">
            <div className="space-y-4">
              {mockHistory.map((book, index) => (
                <Card
                  key={book.id}
                  className="overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer border-0 shadow-lg animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="w-full sm:w-24 h-32 rounded-lg overflow-hidden bg-gradient-to-br from-violet-100 to-pink-100 flex-shrink-0">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-bold text-lg mb-1">{book.title}</h4>
                            <p className="text-gray-600 text-sm">{book.author}</p>
                          </div>
                          <Badge className="bg-violet-100 text-violet-700 border-0">
                            {book.class} класс
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <Icon name="Clock" size={16} />
                          <span>Просмотрено {book.lastViewed}</span>
                        </div>
                        <Button className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white">
                          <Icon name="BookOpen" size={18} className="mr-2" />
                          Продолжить
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stats" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={24} className="text-violet-600" />
                    Прогресс по предметам
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {mockStats.map((stat, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{stat.subject}</span>
                        <span className="text-sm text-gray-600">
                          {stat.solved} из {stat.total}
                        </span>
                      </div>
                      <Progress value={(stat.solved / stat.total) * 100} className="h-3" />
                      <p className="text-xs text-gray-500">
                        {Math.round((stat.solved / stat.total) * 100)}% выполнено
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-violet-600 to-pink-600">
                <CardContent className="p-8">
                  <div className="text-center text-white">
                    <Icon name="Award" size={64} className="mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-2">Уровень 12</h3>
                    <p className="text-white/90 mb-6">Прилежный ученик</p>
                    <div className="space-y-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">До следующего уровня</span>
                          <span className="text-sm font-semibold">129 / 500 XP</span>
                        </div>
                        <Progress value={25.8} className="h-2 bg-white/20" />
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <Icon name="Flame" size={24} className="mx-auto mb-1" />
                          <p className="text-2xl font-bold">7</p>
                          <p className="text-xs text-white/80">дней подряд</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <Icon name="Target" size={24} className="mx-auto mb-1" />
                          <p className="text-2xl font-bold">93%</p>
                          <p className="text-xs text-white/80">точность</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <Icon name="Zap" size={24} className="mx-auto mb-1" />
                          <p className="text-2xl font-bold">42</p>
                          <p className="text-xs text-white/80">в неделю</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Trophy" size={24} className="text-amber-500" />
                    Достижения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { icon: 'BookOpen', title: 'Первая книга', color: 'from-blue-500 to-cyan-500', unlocked: true },
                      { icon: 'Flame', title: 'Неделя подряд', color: 'from-orange-500 to-red-500', unlocked: true },
                      { icon: 'Star', title: '100 заданий', color: 'from-amber-500 to-yellow-500', unlocked: true },
                      { icon: 'Rocket', title: 'Быстрый старт', color: 'from-violet-500 to-purple-500', unlocked: true },
                      { icon: 'Crown', title: 'Лучший в классе', color: 'from-pink-500 to-rose-500', unlocked: false },
                      { icon: 'Gem', title: '500 заданий', color: 'from-emerald-500 to-green-500', unlocked: false },
                      { icon: 'Shield', title: 'Месяц подряд', color: 'from-indigo-500 to-blue-500', unlocked: false },
                      { icon: 'Sparkles', title: 'Перфекционист', color: 'from-fuchsia-500 to-pink-500', unlocked: false },
                    ].map((achievement, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-xl text-center transition-all ${
                          achievement.unlocked
                            ? `bg-gradient-to-br ${achievement.color} text-white shadow-lg hover:scale-105 cursor-pointer`
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        <Icon name={achievement.icon as any} size={32} className="mx-auto mb-2" />
                        <p className="text-xs font-semibold">{achievement.title}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
