from wordnik import *
from secrets import WORDNIK_API_KEY

# this is a quick script to write out a csv with a bunch of random nouns

apiUrl = 'http://api.wordnik.com/v4'
client = swagger.ApiClient(WORDNIK_API_KEY, apiUrl)
api = WordsApi.WordsApi(client)


# max is 1000 words at a time. arbitrary-ish corpus count params to get non-overlapping samples
# some nouns
nouns = api.getRandomWords(limit=1000, minCorpusCount=80000, maxCorpusCount=200000, includePartOfSpeech='noun')
more_nouns = api.getRandomWords(limit=1000, minCorpusCount=200000, includePartOfSpeech='noun')
# some proper nouns
proper_nouns = api.getRandomWords(limit=1000, minCorpusCount=60000, includePartOfSpeech='proper-noun')
more_proper_nouns = api.getRandomWords(limit=1000, minCorpusCount=10000, maxCorpusCount=60000, includePartOfSpeech='proper-noun')

all_nouns = [w.word for w in nouns]+[w.word for w in more_nouns]+[w.word for w in proper_nouns]+[w.word for w in more_proper_nouns]

# write out to file
with open('word_collection.txt', 'w') as f:
    output = '\n'.join(all_nouns).encode('utf-8')
    f.write(output)
